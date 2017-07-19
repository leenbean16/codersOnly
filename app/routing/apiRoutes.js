var express = require("express");
var friendData = require('../data/friends.js');
var path = require('path');
var router = express.Router();

var totalDifference = 0;

    router.get('/api/friends', function(req, res) {
        res.json(friends);

});

module.exports = router;