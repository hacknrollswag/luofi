import './App.css';
import { useState, setState } from 'react';
import Player from './components/player.js';
import mockGifs from './assets/data/mockGifs';
import SearchButton from "./components/search-button.component.js"
import SearchBar from "./components/search-bar.component.js"

export default function App() {

  const [index, setIndex] = useState(0);

  const changeImg = () => {
    if (index + 1 === mockGifs.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
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
        <SearchBar />
        <SearchButton />
        <Player />
        <div style={{width: "100%", height: "800px"}}
          onClick={changeImg} />
    </div>
  )
};