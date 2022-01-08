//import { findMoodResult, analyzeMood } from './sentiment';
import az from 'search-azlyrics/index.js'

export default async function search(artist, song) {
    const lowerArtist = artist.toLowerCase();
    const lowerSong = song.toLowerCase();

    const lyrics = await az.search(artist, song)
    return lyrics;
}