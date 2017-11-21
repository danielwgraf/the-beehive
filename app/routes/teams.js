var express = require('express');
var router = express.Router();

router.get('/teams', function(req, res) {
  var data = req.app.get('appData');
  var pageTeams = [];
  var pagePlayers = data.seasons.seventeen.players;


  data.seasons.seventeen.players.forEach(function(item) {
    item.teams.forEach(function(team) {
      pageTeams = pageTeams.concat(team);
    });
  });

  res.render('teams', {
    pageTitle: 'Teams',
    players: pagePlayers,
    teams: pageTeams,
    pageID: 'teamList'
  });
});

router.get('/teams/:teamid', function(req, res) {
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

  res.render('teams', {
    pageTitle: 'Team Info',
    players: pagePlayers,
    teams: pageTeams,
    pageID: 'teamDetail'
  });
});

module.exports = router;
