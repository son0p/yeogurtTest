/**
 * Auth Routes
 */

'use strict';

var songController = require('../controllers/song');


var routes = function(app) {
   app.get('/song', songController.song);
   app.post('/song', songController.postSong);
   app.get('/song/:id', songController.songId);//parametro variable documentación expres, parametros
};

module.exports = routes;
