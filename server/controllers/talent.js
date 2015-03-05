/**
 * Index Controller
 */

'use strict';

var settings = require('../config/env/default');
var path = require('path');

var talent = function(req, res) {
  // Render index.html to allow application to handle routing
  res.sendFile(path.join(settings.staticAssets, '/pasabordo.html'), { root: settings.root });
};

var fonseca = function(req, res) {
    res.sendFile(path.join(settings.staticAssets, '/fonseca.html'), { root: settings.root });
};


module.exports = {
  talent: talent,
  fonseca: fonseca
};
