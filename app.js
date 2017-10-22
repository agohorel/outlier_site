var express      = require("express"),
    app          = express(),
    bodyParser   = require("body-parser");

// mongoose.connect("mongodb://localhost/outlier");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("../views/static/home.ejs");
});

app.get("/news", function(req, res){
	res.render("../views/static/news.ejs");
});

app.get("/artists", function(req, res){
	res.render("../views/static/artists.ejs");
});


 app.listen(8000, "127.0.0.1", function(){
 	console.log("outlier server is listening");
 });