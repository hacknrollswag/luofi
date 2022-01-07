import express from 'express';
import { baseTerms, youtube } from '../tools/youtube.js';

const router = express.Router();

router.route('/artist/:artist/song/:song').get((req, res) => {
    console.log(`${req.params.artist} ${req.params.song}`);
    youtube.get("/search", {
      params: {
        ...baseTerms,
        q: req.params.artist
      },
    })
    .then(response => {
      console.log(response.data.items.length);
      res.json(response.data.items[0].id.videoId);
    })
    .catch(err => res.status(401).json('Error: ' + err));
  });
  
  export default router;