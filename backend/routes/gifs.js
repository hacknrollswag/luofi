const router = require('express').Router();
let Gif = require('../models/gif.model');

router.route('/gifs/:mood').get((req, res) => {
  Gif.find({ mood: req.params.mood})
    .then(gif => res.json(gif))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;