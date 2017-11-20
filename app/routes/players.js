var express = require('express');
var router = express.Router();

router.get('/players', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pagePlayers = data.seasons.seventeen.players;

  // data.speakers.forEach(function(item) {
  //   pagePhotos = pagePhotos.concat(item.artwork);
  // });

  res.render('players', {
    pageTitle: 'Players',
    artwork: pagePhotos,
    players: pagePlayers,
    teams: [],
    pageID: 'playerList'
  });
});

router.get('/players/:playerid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pagePlayers = [];

  data.seasons.seventeen.players.forEach(function(item) {
    if (item.shortname == req.params.speakerid) {
      pagePlayers.push(item);
      // pagePhotos = pagePhotos.concat(item.artwork);
    }
  });

  res.render('players', {
    pageTitle: 'Player Info',
    artwork: pagePhotos,
    players: pagePlayers,
    teams: [],
    pageID: 'playerDetail'
  });
});

module.exports = router;
