import express from 'express';
import Gif from '../models/gif.model.js';
import { baseTerms, youtube } from '../youtube/youtube.js';

const router = express.Router();

router.route('/gifs/:mood').get((req, res) => {
  Gif.find({ mood: req.params.mood})
    .then(gif => res.json(gif))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/artist/:artist/song/:song').get((req, res) => {
  console.log(`${req.params.artist} ${req.params.song}`);
  youtube.get("/search", {
    params: {
      ...baseTerms,
      q: req.params.artist
    },
  })
  .then(ytRes => {
    console.log(ytRes.data.items[0].videoId);
    res.json(ytRes.data.items[0].videoId)
  })
  .catch(err => res.status(401).json('Error: ' + err));
});

export default router;