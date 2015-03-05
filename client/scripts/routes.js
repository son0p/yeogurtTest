
'use strict';

var App = App || {};
App.Routers = App.Routers || {};

App.Routers.Main = Backbone.Router.extend({

  routes: {
    'login': 'login',
    'forgot': 'forgot',
    'reset/:token': 'reset',
    'signup': 'signup',
    'settings': 'settings',
    '': 'index',
    'pasabordo': 'pasabordo',
    'fonseca': 'fonseca',
    'songForm': 'songForm',
    'song':'song'
  },
  index: function() {
    var homePage = new App.Views.Default({
      subviews: {
        '.content': new App.Views.Index()
      }
    });
    App.render(homePage);
  },

  pasabordo: function() {
    var pasabordoPage = new App.Views.Default({
      subviews: {
        '.content': new App.Views.Pasabordo()
      }
    });
    App.render(pasabordoPage);
  },

 fonseca: function() {
    var fonsecaPage = new App.Views.Default({
      subviews: {
        '.content': new App.Views.fonseca()
      }
    });
    App.render(fonsecaPage);
  },

 songForm: function() {
    var songFormPage = new App.Views.Default({
      subviews: {
        '.content': new App.Views.songForm()
      }
    });
    App.render(songFormPage);
  },

song: function() {
    var songPage = new App.Views.Default({
      subviews: {
        '.content': new App.Views.song()
      }
    });
    App.render(songPage);
  },

  login: function() {
    // If user is logged in, redirect to settings page
    if (App.user.get('loggedIn')) {
      return App.router.navigate('/settings', {trigger: true});
    }
    var loginPage = new App.Views.Default({
      subviews: {
        '.content': new App.Views.Login()
      }
    });
    App.render(loginPage);
  },


  forgot: function() {
    // If user is logged in, redirect to settings page
    if (App.user.get('loggedIn')) {
      return App.router.navigate('/settings', {trigger: true});
    }
    // If reset token is invalid or has expired, display error message
    if (window.location.search === '?error=invalid') {
      App.messages.setMessages({
        errors: [{
          msg: 'Reset is invalid or has expired.'
        }]
      });
    }
    var forgotPage = new App.Views.Default({
      subviews: {
        '.content': new App.Views.Forgot()
      }
    });
    App.render(forgotPage);
  },

  reset: function() {
    // If user is logged in, redirect to settings page
    if (App.user.get('loggedIn')) {
      return App.router.navigate('/settings', {trigger: true});
    }
    var resetPage = new App.Views.Default({
      subviews: {
        '.content': new App.Views.Reset()
      }
    });
    App.render(resetPage);
  },

  signup: function() {
    // If user is logged in, redirect to settings page
    if (App.user.get('loggedIn')) {
      return App.router.navigate('/settings', {trigger: true});
    }
    var signupPage = new App.Views.Default({
      subviews: {
        '.content': new App.Views.Signup()
      }
    });
    App.render(signupPage);
  },

  settings: function() {
    // If user is not logged in, redirect to login page
    if (!App.user.get('loggedIn')) {
      return App.router.navigate('/login', {trigger: true});
    }
    var settingsPage = new App.Views.Default({
      subviews: {
        '.content': new App.Views.Settings()
      }
    });
    App.render(settingsPage);
  },

  // Runs before every route loads
  execute: function(callback, args) {
    // Clear out any global messages
    App.messages.clear();
    if (callback) {
      callback.apply(this, args);
    }
  }
});
