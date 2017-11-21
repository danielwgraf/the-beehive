var express = require('express');
var router = express.Router();

router.get('/standings', function(req, res) {
  var data = req.app.get('appData');
  var pageTeams = [];
  var pagePlayers = data.seasons.seventeen.players;

  data.seasons.seventeen.players.forEach(function(item) {
    item.teams.forEach(function(team){
      pageTeams = pageTeams.concat(team);
    });
  });

  res.render('standings', {
    pageTitle: 'Standings',
    players: pagePlayers,
    teams: pageTeams,
    pageID: 'standings'
  });

});

module.exports = router;
