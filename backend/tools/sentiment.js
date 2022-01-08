import Sentiment from 'sentiment';

var sentiment = new Sentiment();

export function findMoodResult(lyrics) {
    return sentiment.analyze(lyrics);
}

// export function analyzeMood(result) {
//     // returns an array with the percentage of the moods, respectively [happy, neutral, sad]
//     // e.g. [0.3, 0.7, 0]

//     const arr = [0, 0, 0];
//     const score = result.score;
//     const total = result.tokens.length;
    
//     if (score == 0) {
//         arr[1] = 1;
//     } else if (score < 0) {
//         arr[2] = round(Math.abs(score / total));
//         arr[1] = 1 - arr[2];
//     } else {
//         arr[0] = round(score / total);
//         arr[1] = 1 - arr[0];
//     }

//     return arr;
// }

export function analyzeMood(result) {
    const score = result.comparative;

    if (score > 0.3) {
        return 0;
    } else if (score >= 0) {
        return 1;
    } else {
        return 2;
    }
}

function round(decimal) {
    return Math.round(decimal * 10) / 10;
}