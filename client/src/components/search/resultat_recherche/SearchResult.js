import React, { useState, useEffect } from "react";
import "./searchresult.scss";

export default function SearchResults() {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const url = process.env.REACT_APP_NGINX_LINK;
    
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("query");
    setSearchTerm(query);

    async function fetchData() {
      const response = await fetch("http://localhost:3001/search/search_bar");
      const data = await response.json();
      setDatas(data);
    }
    fetchData();
  }, []);


  const filteredData = datas.filter((item) => {
    return (
      (item.videoTitle && item.videoTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.userPseudo && item.userPseudo.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.channelName && item.channelName.toLowerCase().includes(searchTerm.toLowerCase())) 
    );
  });

  function formatDuration(duration) {
    const seconds = Math.floor(duration % 60);
    const minutes = Math.floor(duration / 60) % 60;
    const hours = Math.floor(duration / (60 * 60)) % 24;
    const days = Math.floor(duration / (60 * 60 * 24)) % 365;
    const years = Math.floor(duration / (60 * 60 * 24 * 365));

    if (years > 0) {
      return `Publiée il y a ${years} ${years > 1 ? "ans" : "an"}`;
    } else if (days > 0) {
      return `Publiée il y a ${days} ${days > 1 ? "jours" : "jour"}`;
    } else if (hours > 0) {
      return `Publiée il y a ${hours} ${hours > 1 ? "heures" : "heure"}`;
    } else if (minutes > 0) {
      return `Publiée il y a ${minutes} ${minutes > 1 ? "minutes" : "minute"}`;
    } else {
      return `Publiée il y a ${seconds} ${seconds > 1 ? "secondes" : "seconde"}`;
    }
  }

  console.log(filteredData);

  return (
    <div className="search-results">
      {filteredData.map((filteredData) => {
        const datePublished = new Date(filteredData.videoPublishedAt);
        const now = new Date();
        const duration = Math.floor((now.getTime() - datePublished.getTime()) / 1000);
        return (
          <div key={filteredData.id} className="search-item">
            <a href={`/video?id=${filteredData.videoId}`} >
              <img className="search-item-thumbnail" src={url + filteredData.videoMiniature} alt={filteredData.title} />
              <div className="search-item-info">
                <h2 className="search-item-title">{filteredData.videoTitle}</h2>
                <p className="search-item-views">{filteredData.videoViews} vues</p>
                <p className="search-item-published">{formatDuration(duration)}</p>
                <div className="search-item-details">
                  <a href={`/channel/${filteredData.channelName}`}><img className="search-item-channel-logo" src={url + filteredData.channelImageLink}/>
                  <p className="search-item-channel-name">{filteredData.channelName}</p></a>
                </div>
              </div>
            </a>
            <hr />
          </div>
        );
      })}
    </div>

  );
}
