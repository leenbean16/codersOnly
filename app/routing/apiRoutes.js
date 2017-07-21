let router = require("express").Router();
let friendData = require('../data/friends.js');
let path = require('path');
let bodyParser = require('body-parser');

let totalDifference = 0;

router.get('/friends', function(req, res) {
    return res.json(friendData.friends);
});

router.post('/friends', function(req, res){
	let formInput = req.body;
	friendData.addFriend(formInput);
})

module.exports = router;