var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pagePlayers = data.seasons.seventeen.players;

  data.seasons.seventeen.players.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    players: pagePlayers,
    teams: [],
    pageID: 'home'
  });

});

module.exports = router;
