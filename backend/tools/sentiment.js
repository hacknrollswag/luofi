const Sentiment = require('sentiment');
const sentiment = new Sentiment();

export function findMoodResult(lyrics) {
    return sentiment.analyze(lyrics);
}

export function analyzeMood(moodValue) {
    // returns an array with the percentage of the moods, respectively [happy, neutral, sad]
    // e.g. [0.3, 0.7, 0]

    const arr = [0, 0, 0];
    const score = parseInt(moodValue.charAt(7));
    
    if (score == 0) {
        arr[1] = 1;
    } else if (score < 0) {
        arr[2] = round(Math.abs(score / 5));
        arr[1] = 1 - arr[2];
    } else {
        arr[0] = round(score / 5);
        arr[1] = 1 - arr[0];
    }

    return arr;
}

function round(decimal) {
    return Math.round(decimal * 10) / 10;
}