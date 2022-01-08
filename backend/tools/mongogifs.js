import Gif from '../models/gif.model.js';

export default function(moodVal, action) {
    
    const MOODS = ["happy", "neutral", "sad"];

    Gif.find({ mood: MOODS[moodVal]})
        .then(gifs => {
            console.log(`Adding ${gifs.length} ${MOODS[moodVal]} gifs`);
            action(gifs);
        })
        .catch(err => {
            console.log("Error in retrieving gifs");
        });
};