import './App.css';
import Gif from "./Components/gif.component" 
import SearchButton from "./Components/search-button.component"
import SearchBar from "./Components/search-bar.component"

export default function App() {
  return (
    <div>
      <Gif />
      <SearchButton />
      <SearchBar />
    </div>
  )
};