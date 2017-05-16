
// Renders portions of {{body}} through index.handlebars //
module.exports = {
  renderProducts: function(req, res) {
    res.render('products', {
      msg: "Welcome! this is data being passed into the render function!"
    });
  },
  renderHome: function(req, res) {
    // needs to be user obj to fill in all that data
    // get ("/:
    // then req.params.id")
    res.render('index', {
      msg: "Welcome! this is data being passed into the render function!"
    });
  }
};
