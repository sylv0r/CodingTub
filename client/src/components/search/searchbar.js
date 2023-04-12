import React from "react";
import { useState, useEffect } from "react";
//import "./Searchs.scss";

export default function Search2() {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);

  const handleSearchTerm = (e) => {
    setSearchTerm("");
    let value = e.target.value;
    value.length > 2 && setSearchTerm(e.target.value);
  };

  return (
    <>
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
        {datas
          .filter((val) => {
            return val.title.toLowerCase().includes(searchTerm.toLowerCase());
            
          })
          .map((val) => {
            return (
                
              <div className="search__result" key={val.id}>
                {val.title}
                
              </div>
            );
          })}
      </div>
    </>
  );
}
    