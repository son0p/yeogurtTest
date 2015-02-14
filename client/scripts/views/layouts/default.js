'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Default = Backbone.View.extend({

  template: JST['client/templates/layouts/default'],

  events: {},

  initialize: function(options) {
    // Check to see if any options were passed in
    if (options) {
      this.options = options;
    }
  },

  render: function() {
    this.$el.html(this.template);

    // If subviews are passed in, then assign/render them
    if (this.options && this.options.subviews) {
      this.assign(_.extend(
        this.options.subviews,
        this.subviews
      ));
    }
    else {
      // Assign/Render subviews
      this.assign(this.subviews);
    }

    return this;
  },

  subviews: {
    '.main-nav': new App.Views.Navbar(),
    '.messages': new App.Views.Messages()
  }

});
