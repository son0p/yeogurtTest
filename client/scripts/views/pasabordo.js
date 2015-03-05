'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Pasabordo  = Backbone.View.extend({

  el: '.content',

  template: JST['client/templates/pasabordo'],

  events: {},

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }
});
