import './App.css';
//import Search from './components/search/Searchs.js';
import Filtre from './components/search/filtre.js';
import Search from './components/search/search.js';
import React from "react";


function App() {
  return (
    <div className="App">
      <Search />
      <Filtre />
      
    </div>
  );
}

export default App;