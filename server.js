var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape',function(req,res){

  url ='http://www.imdb.com/title/tt1229340/';
  request(url, function(error,response,html){
    if(error) throw error;
    var movie = cheerio.load(html);

    var title, release, rating;

    var json {title:"",release: "", rating: ""};


})

})

app.listen('8081')

consile.log('Eventually the scrpaing will happen on port 8081');

exports = module.exports = app;
