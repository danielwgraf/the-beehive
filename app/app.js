var express = require('express');
var reload = require('reload');
var app = express();
var favicon = require('serve-favicon');
var dataFile = require('./data/mainData.json');

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'The Beehive';
app.locals.allCurrentPlayers = dataFile.seasons.seventeen.players;

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/players'));
app.use(require('./routes/about'));
app.use(require('./routes/teams'));
app.use(require('./routes/standings'));
app.use(favicon(__dirname + '/public/images/misc/beehive/favicon.ico'));


var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
