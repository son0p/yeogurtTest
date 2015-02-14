'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Forgot = Backbone.View.extend({

  el: '.content',

  template: JST['client/templates/account/forgot'],

  events: {
    'submit form': 'formSubmit'
  },

  initialize: function() {
    this.render();
  },

  formSubmit: function(e) {
    e.preventDefault();
    var $form = $(e.currentTarget);
    App.user.forgot($form);
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }

});
