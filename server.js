var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var Papa = require("papaparse")
var fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var router = express.Router();

router.get('/getAllListings', function(req, res) {
  Papa.parse(fs.createReadStream('./listings.csv', {encoding: 'utf8'}), {
    delimiter: ",",
    worker: true,
    header: true,
    complete: function(results, parser) {
      res.send({"results": results});
    }
  });
})

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
