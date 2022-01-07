import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Player from './component/player.js';
import mockGifs from './assets/data/mockGifs';
import Search from "./component/search.component.js"

export default function App() {

  const [index, setIndex] = useState(0);
  const [videoId, setVideoId] = useState('');

  const changeImg = () => {
    if (index + 1 === mockGifs.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  const onClickSearch = async (input) => {
    const searchTerms = input.split(",");
    const url = `http://localhost:5000/yt/artist/${searchTerms[0]}/song/${searchTerms[1]}`;

    const vid = await axios.get(url).then(res => res.data);
    console.log(`search successful, ${vid} video-id found`)
    setVideoId(vid);
  }

  const gifStyles = {
    backgroundImage: `url(${mockGifs[index].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: "100%",
    height: "100%"
  };

  return (
    <div className="App" style={gifStyles}>
        <Search onSubmit={onClickSearch}/>
        <Player vid= {videoId}/>
        <div style={{width: "100%", height: "800px"}}
          onClick={changeImg} />
    </div>
  )
};