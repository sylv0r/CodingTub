import React from "react";
import { useState, useEffect } from "react";
//import "./Searchs.scss";

export default function Search2() {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("http://localhost:3001/searchbarreur/search_bar")
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    if (value.length > 2) {
      setSearchTerm(value);
    } else {
      setSearchTerm('');
    }
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
        {searchTerm.length > 2 &&
          datas.filter((val) =>
            (val.title && val.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (val.pseudo && val.pseudo.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (val.name && val.name.toLowerCase().includes(searchTerm.toLowerCase()))
          )
          .map((val) => {
            return (
              <div className="search__result" key={val.id}>
                {val.name}
                {val.title}
                {val.pseudo}
              </div>
            );
          })
        }
      </div>
    </>
  );
}