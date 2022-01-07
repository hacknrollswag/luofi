import express from 'express';
import Gif from '../models/gif.model.js';

const router = express.Router();

router.route('/gifs/:mood').get((req, res) => {
  Gif.find({ mood: req.params.mood})
    .then(gif => res.json(gif))
    .catch(err => res.status(400).json('Error: ' + err));
});

export default router;