const router = require('express').Router();
let Gif = require('../models/gif.model');

router.route('/gifs/:sentiment').get((req, res) => {
  Gif.find({ category: req.params.sentiment})
    .then(gif => res.json(gif))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;