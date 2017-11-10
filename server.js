var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var csv = require('express-csv')
var Papa = require("papaparse")
var http = require('http');
var fs = require('fs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var router = express.Router();
// test route
router.get('/', function(req, res) {
  res.json({message: 'welcome to our dockerdashboard module apis'});
});


router.get('/getAllListings', function(req,res){
  Papa.parse(fs.createReadStream('./listings.csv'), {
       delimiter: ",",
       header: true,
       complete: function(results, parser) {
         res.send({"results": results});
         next();
 }
   });

});
app.use('/api', router);
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));
app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
