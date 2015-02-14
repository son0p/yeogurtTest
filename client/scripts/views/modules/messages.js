'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Messages = Backbone.View.extend({

  el: '.messages',

  template: JST['client/templates/modules/messages'],

  events: {},

  initialize: function() {
    // Re-render template when messages store changes
    this.listenTo(App.messages, 'change', this.render);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(App.messages.toJSON()));
    return this;
  }

});
