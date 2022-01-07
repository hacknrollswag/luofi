import { findMoodResult, analyzeMood } from '../sentiment/sentiment';

const az = require('./index');

export function search(artist, song) {
    const lowerArtist = artist.toLowerCase();
    const lowerSong = song.toLowerCase();

    az.search(lowerArtist, lowerSong)
        .then(lyrics => analyzeMood(findMoodResult(lyrics))); // returns an arr
}