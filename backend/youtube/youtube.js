const YOUTUBE_SEARCH_API = 'https://www.googleapis.com/youtube/v3/search';

export async function getServerSideProps() {
    const res = await fetch(`${YOUTUBE_SEARCH_API}?part=snippet&id=5qap5aO4i9A&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}