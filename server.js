var express = require('express');
var app = express();

var db = require('./models');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine','pug');
app.listen(3000, function() {
  db.sequelize.sync();
});

var routes = require('./routes')(app);