// *********************************************************************************
// htmlRoutes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var homeController = require('../controllers/home');
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  app.get('/', homeController.renderHome);
   app.get('/products', homeController.renderProducts);
};
