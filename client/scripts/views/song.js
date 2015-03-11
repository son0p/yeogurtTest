'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Song = Backbone.View.extend({

  el: '.content',

  template: JST['client/templates/song'],

  events: {  },

  initialize: function() {

    this.render();
  },

 
  render: function() {
      alert("hola");
    this.$el.html(this.template({
      song: App.song.toJSON()
	
    }));
    return this;
  }

});
