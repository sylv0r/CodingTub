import './App.css';
import Search from './components/search/Searchs.js';
import SearchPage from './components/searchpage/searchPage.js';
import { StrictMode } from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <Search />
      <SearchPage />
       
    </div>
  );
}

export default App;