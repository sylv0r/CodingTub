import React from "react";
import { useState, useEffect } from "react";
import './searchbar.scss';
//import "./Searchs.scss";


export default function Search2() {

  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    if (value.length > 0) {
      setSearchTerm(value);
    } else {
      setSearchTerm('');
    }
  };

  async function getSearch() {
    const response = await fetch(`http://localhost:3001/search/search_bar`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    setDatas(data);
  }

  useEffect(()=>{
    getSearch();
  }, []);

  const filteredData = datas.filter(item => {
    return (
      (item.videoTitle && item.videoTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.userPseudo && item.userPseudo.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.channelName && item.channelName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.liveTitle && item.liveTitle.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (


    <div id="search">
      <div className="searchBar">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Rechercher"
          onChange={handleSearchTerm}
        />
      </div>
      <div className="search__results">
        {searchTerm.length > 0 &&
          filteredData.map((item, index) => (
            <div key={index}>
              {item.videoTitle &&
                item.videoTitle.toLowerCase().includes(searchTerm.toLowerCase()) && (
                  <div>{item.videoTitle}</div>
                )}
              {item.userPseudo &&
                item.userPseudo.toLowerCase().includes(searchTerm.toLowerCase()) && (
                  <div>{item.userPseudo}</div>
                )}
              {item.channelName &&
                item.channelName.toLowerCase().includes(searchTerm.toLowerCase()) && (
                  <div>{item.channelName}</div>
                )}
              {item.liveTitle &&
                item.liveTitle.toLowerCase().includes(searchTerm.toLowerCase()) && (
                  <div>{item.liveTitle}</div>
                )}
            </div>
          ))}
      </div>
    </div>

  );
}
