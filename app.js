var express = require('express');
var request = require('request');
var app = express();

//app setup
app.set('view engine', 'ejs');
app.use(express.static('public'));

//    Routes
app.get('/', function(req, res){
  res.render('home');
});

//people route
app.get('/people', function(req, res){
  request('https://swapi.co/api/people/', function(error, response, body){
    var myData = JSON.parse(body);
    if(!error && response.statusCode == 200){
      res.render('people', {data: myData})
    }else{
      console.log(error);
    }
  });
});

//listner
app.listen(3000, function(){
  console.log('Server Started...');
});
