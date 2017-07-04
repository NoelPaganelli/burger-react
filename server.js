var express   = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/shop', function(req, res) {
  res.render('shop');
});


app.listen(80, function () {
  console.log("Server listening on port 80");
});