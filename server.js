var express = require("express");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
   let restext=("Hello World<br /><a href='/about'>Go to the about page</a> <br>");
   restext+=("salaaaaam");
   res.send(restext);
});

// setup another route to listen on /about
app.get("/about", function(req,res){
    let restext=("<h3>this is about page</h3> <br>");
    restext+=("<a href='/'>Go to home page</a>");
    res.send(restext);
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);