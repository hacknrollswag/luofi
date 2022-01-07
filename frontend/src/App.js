import './App.css';
import Gif from "./components/gif.component.js" 
import Player from './components/player.js';
import SearchButton from "./components/search-button.component.js"
import SearchBar from "./components/search-bar.component.js"

export default function App() {
  return (
    <div>
      <Gif />
      <SearchButton />
      <SearchBar />
    </div>
  )
};