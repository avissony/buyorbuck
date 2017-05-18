// *********************************************************************************
// apiRoutes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var testApiController = require('../controllers/testApi');

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for testing	
  app.get('/test', testApiController.index);

  // GET route for getting all of the designers
  app.get("/api/designer", function(req, res) {
    var query = {};
    db.Designer.findAll({
      where: query
    }).then(function(dbDesigner) {
      res.json(dbDesigner);
    });
  });

  // POST route for saving a new post
  app.post("/api/designer", function(req, res) {
    db.Designer.create(req.body).then(function(dbPost) {
      res.json(dbDesigner);
    });
  });

};
