var express = require('express');
var app = express();
var exec = require('child_process').exec;
var mongoose = require('mongoose');
var Post = require('./models/post');

app.set('view engine' , 'ejs');

app.use(express.static('public'));

app.get('/' , function(req , res){

  res.render("index");

});

// connect to database
if(process.env.DB_HOST) {
  mongoose.connect(process.env.DB_HOST);

  app.get("/posts", async function(req, res) {
    try {
      const posts = await Post.find({});
      res.render("posts/index", { posts: posts });
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  });
}

app.listen(3000 , function(){
  console.log('Your app is ready and listening on port 3000');
});


module.exports = app;