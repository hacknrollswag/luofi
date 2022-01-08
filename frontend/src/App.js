import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Player from './component/player.js';
import background from './assets/images/lofi-0.jpeg';
import Search from "./component/search.component.js";

export default function App() {

  const [index, setIndex] = useState(0);
  const [videoId, setVideoId] = useState('');
  const [gifs, setGifs] = useState([]);

  const changeImg = () => {
    if (index + 1 === gifs.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  const onClickSearch = (input) => {
    const searchTerms = input.split(",");
    const BASE_URL = `http://localhost:5000/artist/${searchTerms[0]}/song/${searchTerms[1]}`;
    findYt(BASE_URL + "/yt");
    findGifs(BASE_URL + "/gifs");
    
  }

  const findYt = async (url) => {
    const vid = await axios.get(url).then(res => res.data);
    console.log(`search successful, ${vid} video-id found`)
    setVideoId(vid);
  }

  const findGifs = async (url) => {
    const g = await axios.get(url).then(res => res.data);
    console.log(`search successful, ${g.length} gifs found`)
    setGifs(g);
  }


  const gifsPlayer = {
    backgroundImage: `url(${gifs.length > 0 ? gifs[index].url : background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: "100%",
    height: "100%"
  };

  return (
    <div className="App" style={gifsPlayer}>
        <Search onSubmit={onClickSearch}/>
        <Player vid= {videoId}/>
        <div style={{width: "100%", height: "800px"}}
          onClick={changeImg} />
    </div>
  )
};