import './App.css';
import Search from './components/search/Searchs.js';
import SearchPage from './components/searchpage/searchPage.js';
//import Header from './components/search/Header';

import { StrictMode } from "react";
import ReactDOM from "react-dom";
function App() {
  return (
    <div className="App">
      <Search />
      <SearchPage />
      <Filtre />
      
    </div>
  );
}

export default App;