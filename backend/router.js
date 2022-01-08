import express from 'express';
import { searchVideo } from './tools/youtube.js';
import searchLyrics from './tools/az.js';
import { analyzeMood, findMoodResult } from './tools/sentiment.js';
import getGifs from './tools/mongogifs.js';

const router = express.Router();

router.route('/artist/:artist/song/:song/yt').get((req, res) => {
    searchVideo(req.params.artist, req.params.song)
     .then(response => {
         console.log("Returning search result...");
         console.log(response[0].id.videoId);
         res.json(response[0].id.videoId);
     })
     .catch(err => res.status(401).json('Error: ' + err));
    
  });

router.route('/artist/:artist/song/:song/gifs').get((req, res) => {
    searchLyrics(req.params.artist, req.params.song)
    .then(lyr => analyzeMood(findMoodResult(lyr))
    )
    .then(vals => {
        console.log(vals);
        getGifs(vals, (gifs) => {
            res.json(gifs);
        })
    })
    .catch(err => res.status(402).json('Error: ' + err));
  });
  
  export default router;