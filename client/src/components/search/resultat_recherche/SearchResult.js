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


  console.log(filteredData);

  return (
    <div className="search-results">

      {filteredData.map((filteredData) => (
        <div key={filteredData.id} className="search-item">
          <a href={`/video?id=${filteredData.videoId}`} >
            <img className="search-item-thumbnail" src={url + filteredData.videoMiniature} alt={filteredData.title} />
            <div className="search-item-info">
              <h2 className="search-item-title">{filteredData.videoTitle}</h2>
              <p className="search-item-channel">{filteredData.channelName}</p>
              <div className="search-item-details">
                <i className="fa fa-calendar search-item-details-icon"></i>
                <p>{filteredData.videoPublishedAt}</p>
                <p className="search-item-views">{filteredData.videoViews}</p>
              </div>
            </div>
          </a>
          <hr />
        </div>
      ))}
    </div>
  );
}
