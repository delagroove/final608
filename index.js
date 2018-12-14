var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/2016', function (req, res) {
    res.render('home2016');
});

app.listen(process.env.PORT || 3000);