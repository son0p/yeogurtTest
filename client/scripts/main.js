'use strict';

// Create application namspace
var App = App || {
  Views: {},
  Models: {},
  Collections: {},
  Controllers: {},
  Routers: {}
};

(function() {

  // Use GET and POST to support all browsers
  // Also adds '_method' parameter with correct HTTP headers
  Backbone.emulateHTTP = true;

  // Create cleanup logic for Backbone views
  Backbone.View.prototype.close = function() {
    this.remove();
    this.unbind();
    // Allows user to create OnClose callback within view
    // Should be used to cleanup bind', and 'on' events
    if (this.onClose) {
      this.onClose();
    }
  };

  // Create subview logic for Backbone views
  // Allows the ability to attach views as subviews
  Backbone.View.prototype.assign = function(selector, view) {
    var selectors;
    if (_.isObject(selector)) {
      selectors = selector;
    } else {
      selectors = {};
      selectors[selector] = view;
    }
    if (!selectors) {return;}
    _.each(selectors, function(view, selector) {
      view.setElement(this.$(selector)).render();
    }, this);
  };

  // Handle displaying and cleaning up views
  App.render = function(view) {
    if (this.currentView) {
      this.currentView.close();
    }

    this.currentView = view;

    $('#app-wrapper').html(this.currentView.render().$el);
  };

  // Initialize routes
  App.router = new App.Routers.Main();

  // Send authorization header on each AJAX request
  $(document).ajaxSend(function(event, request) {
    var token = App.user.getToken();
    if (token) {
      request.setRequestHeader('authorization', 'Bearer ' + token);
    }
  });

  // Check the auth status upon initialization,
  // should happen before rendering any templates
  App.user.isAuthenticated({

    // Start backbone routing once we have captured a user's auth status
    complete: function() {

      // Enable pushState for compatible browsers
      var enablePushState = true;

      // Detect is pushState is available
      var pushState = !!(enablePushState && window.history && window.history.pushState);

      if (pushState) {
        // Start listening to route changes with pushState
        Backbone.history.start({ pushState: true, root: '/' });
      } else {
        // Start listening to route changes without pushState
        Backbone.history.start();
      }

      // Handle pushState for incompatible browsers (IE9 and below)
      if (!pushState && window.location.pathname !== '/') {
        window.location.replace('/#' + window.location.pathname);
      }

    }

  });

  // Set up global click event handler to use pushState for links
  // use 'data-bypass' attribute on anchors to allow normal link behavior
  $(document).on('click', 'a:not([data-bypass])', function(event) {

    var href = $(this).attr('href');
    var protocol = this.protocol + '//';

    if (href.slice(protocol.length) !== protocol) {
      event.preventDefault();
      App.router.navigate(href, true);
    }

  });

  console.log('Welcome to Yeogurt');

})();
