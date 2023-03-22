import React from "react";
import "./search.scss";
import { useState, useEffect} from "react";

function Search() {

    const [datas, setDatas] = useState([]) 
    const [SearchTerm, setSearchTerm] = useState("") 

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(json => console.log(json))
    }, []);
    const handleSearchTerm = (e) => {
            let value = e.target.value;
            value.length > 2 && setSearchTerm(value); 
    };

    console.log(SearchTerm)
    return (
        <div className="App">
        <div className="searchBar">
            <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Recherche" 
            onChange={handleSearchTerm}
            />
        </div>
        <div className="search_results">
            {datas
            .filter((val) => {
                return val.title.toLowerCase().includes(SearchTerm.toLowerCase())
            })
            .map((val) => {
            return (
                <div className="search_results" key={val.id}>
                    {val.title}
                </div>
            );
        })}
        

        </div>
        <div/>
        </div>

    )
}

export default Search;