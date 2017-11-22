var express = require('express');
var router = express.Router();

router.get('/teams', function(req, res) {
  var data = req.app.get('appData');
  var pageTeams = req.app.locals.allTeams;
  var pagePlayers = data.seasons.seventeen.players;

  res.render('teams', {
    pageTitle: 'Teams',
    players: pagePlayers,
    teams: pageTeams,
    pageID: 'teamList'
  });
});

router.get('/teams/:teamid', function(req, res) {
  var data = req.app.get('appData');
  var pageTeams = [];
  var pagePlayers = [];

  req.app.locals.allTeams.forEach(function(team) {
    if (team.toLowerCase() == req.params.teamid.toLowerCase()) {
      pageTeams.push(team);
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
