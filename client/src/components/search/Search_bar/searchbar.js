import React, { useState, useEffect, useRef } from "react";
import "./searchbar.scss";

export default function Search2() {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedResult, setSelectedResult] = useState(null);

  const searchRef = useRef(null);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    if (value.length > 0) {
      setSearchTerm(value);
      setSelectedResult(null);
    } else {
      setSearchTerm("");
      setSelectedResult(null);
    }
  };

  const handleResultClick = (result) => {
    setSearchTerm(
      result.videoTitle ||
        result.userPseudo ||
        result.channelName ||
        result.liveTitle
    );
    setSelectedResult(result);
    searchRef.current.focus();
    
  };

  async function getSearch() {
    const response = await fetch("http://localhost:3001/searchBar/search_bar", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setDatas(data);
  }

  useEffect(() => {
    getSearch();
  }, []);

  const filteredData = datas.filter((item) => {
    return (
      (item.videoTitle &&
        item.videoTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.userPseudo &&
        item.userPseudo.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.channelName &&
        item.channelName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.liveTitle &&
        item.liveTitle.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const handleSearch = () => {
    const link = `/SerchResult?query=${searchTerm}`;
    window.location.href = link;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div id="search">
  <div class="searchBar">
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Rechercher"
      value={searchTerm}
      ref={searchRef}
      onChange={handleSearchTerm}
      onKeyDown={handleKeyDown}
      class="search"
    />
    <button type="submit" class="search_button" onClick={handleSearch}>
      Rechercher
    </button>
  </div>
  <div class={`search__results ${searchTerm.length > 0 ? "active" : ""}`}>
    {searchTerm.length > 0 &&
      filteredData.map((item, index) => (
        <div key={index} onClick={() => handleResultClick(item)}>
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
  {selectedResult && (
    <div class="selectedResult">
      <div>
        {selectedResult.videoTitle ||
          selectedResult.userPseudo ||
          selectedResult.channelName ||
          selectedResult.liveTitle}
      </div>
    </div>
  )}
</div>)}
