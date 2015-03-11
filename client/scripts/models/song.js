'use strict';

var App = App || {};
App.Models = App.Models || {};

App.Models.Song = Backbone.Model.extend({

  url:'/song',

  initialize: function() {
  },

  defaults: {
   messages: {}
  },

});

// 
App.song = new App.Models.Song();


