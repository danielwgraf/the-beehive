var express = require('express');
var router = express.Router();

router.get('/players', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageTeams = [];
  var pagePlayers = data.seasons.seventeen.players;


  data.seasons.seventeen.players.forEach(function(item) {
    item.teams.forEach(function(team) {
      pageTeams = pageTeams.concat(team);
    });
  });

  res.render('players', {
    pageTitle: 'Players',
    players: pagePlayers,
    teams: pageTeams,
    pageID: 'playerList'
  });
});

router.get('/players/:playerid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageTeams = [];
  var pagePlayers = [];

  data.seasons.seventeen.players.forEach(function(item) {
    if (item.shortName == req.params.playerid) {
      pagePlayers.push(item);
      // pageTeams = pagePlayers.teams;
      item.teams.forEach(function(team) {
        pageTeams = pageTeams.concat(team);
      })
    }
  });

  res.render('players', {
    pageTitle: 'Player Info',
    players: pagePlayers,
    teams: pageTeams,
    pageID: 'playerDetail'
  });
});

module.exports = router;
