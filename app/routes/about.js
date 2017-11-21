var express = require('express');
var router = express.Router();

router.get('/about', function(req, res) {
  var data = req.app.get('appData');
  var pageTeams = [];
  var pagePlayers = data.seasons.seventeen.players;

  data.seasons.seventeen.players.forEach(function(item) {
    item.teams.forEach(function(team){
      pageTeams = pageTeams.concat(team);
    });
  });

  res.render('about', {
    pageTitle: 'About',
    players: pagePlayers,
    teams: pageTeams,
    pageID: 'about'
  });

});

module.exports = router;
