/**
 * Auth Routes
 */

'use strict';

var talentController = require('../controllers/talent');


var routes = function(app) {
  // Account
   app.get('/pasabordo', talentController.talent);
  // app.post('/login', accountController.postLogin);
  // app.get('/forgot', accountController.forgot);
  // app.post('/forgot', accountController.postForgot);
  // app.get('/reset/:token', accountController.reset);
  // app.post('/reset/:token', accountController.postReset);
  // app.get('/signup', accountController.signup);
  // app.get('/settings', accountController.settings);
};

module.exports = routes;
