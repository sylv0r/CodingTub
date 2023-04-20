import React, { useState, useEffect } from "react";
import Filtre from "./dropbutton/dropbutton";

export default function SearchResults() {
  
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("query");
    setSearchTerm(query);
  }, []);
  return (
    <div>
    <div>
    <Filtre/>
    </div>

    <div>
      <p>La valeur de searchTerm est : {searchTerm}</p>
    </div>
    </div>
  );



 
}
