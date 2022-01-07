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

    const vids = await axios.get(url);
    console.log(`search successful, ${vids.length} videos found`)
    setVideoId(vids[0].id.videoId);
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
        <Player />
        <div style={{width: "100%", height: "800px"}}
          onClick={changeImg} />
    </div>
  )
};