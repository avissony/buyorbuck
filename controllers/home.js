
// Renders portions of {{body}} through index.handlebars //
module.exports = {
  renderHome: function(req, res) {
    res.render('index', {

    });
  },

    renderAbout: function(req, res) {
    res.render('about', {

    });
  }
  
};

