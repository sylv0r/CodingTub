import React, { useState, useEffect } from "react";

export default function SearchResults() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("query");
    setSearchTerm(query);
  }, []);

  console.log(searchTerm);

  return (
    <div>
      <p>La valeur de searchTerm est : {searchTerm}</p>
    </div>
  );
}
