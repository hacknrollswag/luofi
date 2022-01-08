import Gif from '../models/gif.model.js';

export default function(mood, action) {
    
    const skipNum = Math.random() * 10;
    const MOODS = ["happy", "neutral", "sad"];

    Gif.find({ mood: MOODS[mood]})
        .then(gifs => {
            console.log(`Adding ${gifs.length} ${MOODS[mood]} gifs`);
            action(gifs);
        })
        .catch(err => {
            console.log("Error in retrieving gifs");
        });
};