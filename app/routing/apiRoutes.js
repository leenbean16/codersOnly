const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const compareFriends = require('../data/friends.js');

let router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.text());
router.use(bodyParser.json({ type: "application/vnd.api+json" }));

router.get('/friends', (req, res) => {
    res.sendFile(path.join(__dirname, '../../friends.json'));

})

router.post('/newFriend', function(req, res) {
    let newPerson = req.body;

    fs.readFile(path.join(__dirname, '../../friends.json'), function(err, data) {
        if (err) throw err;

        let friendsArray = JSON.parse(data);

        friendsArray.push(newPerson);

        fs.writeFile(path.join(__dirname, '../../friends.json'), JSON.stringify(friendsArray, null, 2), 'utf-8', (err) => {
            if (err) throw err;

            console.log("file updated!");
        })

        let match = compareFriends(friendsArray);
        res.status(200).send(match);
    })
})

module.exports = router;