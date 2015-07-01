// Node.js

// Includes
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var unirest = require("unirest");
var app = express();
var http = require('http');
var path = require('path');
var ejs = require('ejs');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

// modules
var api = require('./modules/api.js');

// global Variables

// User Data
var membershipId;
var gamerTag = '';
// var characterId;


// user's character Info
var character;

var characterInfo = [];
var characterItems = [];
var hash = [];

var characterOne = [];
var characterTwo = [];
var characterThree = [];

// Friends Character Info
var fcharacter;

var fcharacterInfo = [];

var fgamerTag = '';
var fcharacterOne = [];
var fcharacterTwo = [];
var fcharacterThree = [];
/*
 	Face Book:
 	AppId: 804379889616035
 	AppSerect: 3662bc272f3c540efa827618188e17a5
*/

var faceBookName = "";

// Connecting to MYSQL Data Base
/*
 var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : 'localhost',
   port     :  '8889',
   database : 'projectdb',
   user     : 'root',
   password : 'root',
 });

// connection.connect();

*/

//App Sets
app.set('views', __dirname);
app.set('view engine', 'ejs');

// App Use
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'ssshhhhh'}));
app.use(express.static(__dirname + '/public'));

// passport initlze
app.use(passport.initialize());
app.use(passport.session());

// Connecting to FaceBook 
passport.use(new FacebookStrategy({
    clientID: '804379889616035',
    clientSecret: '3662bc272f3c540efa827618188e17a5',
    callbackURL: "http://localhost:8080/auth/facebook/callback",
    enableProof: false
  },
  function(accessToken, refreshToken, profile, done) {
  	process.nextTick(function() {
  	//console.log(profile);
    done(null, profile);
  });
}));

// SerializeUser
passport.serializeUser(function(user, done) {
  done(null, user);
});
 
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
 

/*=============   Routes   =============*/

//  Face Book Authenication
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/success',
  failureRedirect: '/error'
}));

app.get('/success', function(req, res, next) {
  res.redirect('/');
});
 
app.get('/error', function(req, res, next) {
  res.send("Error logging in.");
});

/*=============   Views   =============*/

app.get('/', function(req,res){

	res.sendfile(path.join(__dirname + '/views/layout.html'));

});
app.post('/viewCharacter', function(req, res) {



	api.characterInfo(memberId,characterId,system,function(result){



	});





});

app.get('/friend', function(req, res) {


});

/*=============   Processing   =============*/

app.post('/processApi', function(req, res) {

});

app.post('/processFriendApi', function(req, res) {




});
app.post('/processCompare', function(req, res) {






});

/*=============   DataBase CRUD unFinish   =============*/

app.get('/login', function(req, res) {

    res.render('./views/form');

});

app.get('/addUser', function(req, res) {

	res.render('./views/addUser');

});

app.post('/processLogin', function(req, res) {

	var name = req.body.name;
	var password = req.body.password;

	// sess = req.session;
	// sess.name = name;
	// sess.bool = true;
    

	// // SQL Query
 // 	connection.query('SELECT username from users where username = ? and password = ?',[name,password],function(err, rows) {
 //   		console.log("hello"); 
 //   		console.log(rows);

	//  });

    
    res.redirect('/');

     
});
app.post('/processAdd', function(req, res) {

	 var name = req.body.name;
	 var password = req.body.password;
     var gamertag = req.body.gamertag;
	 var system = req.body.system;

//	 sess = req.session;
//	 sess.name = name;


	// SQL Query
 	// connection.query('insert into users(username,password,gamertag,system)values(?,?,?,?)',[name,password,gamertag,system],function(err, rows) {
  //  		console.log("hello"); 
  //  		console.log(rows);
	 // });



    res.redirect('/');


});
app.get('/logout', function(req, res) {
    sess = null;
    
    res.redirect('/')
});

app.listen(8080);
console.log("Listening on port 8080");
