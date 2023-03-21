import React from "react";
import "./Search.css";
import { useState, useEffect} from "react"
import { database } from "../../../../server/initDb";

function Search() {

    const [datas, setDatas] = useState([]) 
    const [SearchTerm, setSearchTerm] = useState("") 

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((Response) => Response.json())
        .then((json) => setDatas(json ));
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
            {datas.filter((val) => {
                return val.title.toLowerCase().includes(SearchTerm.toLowerCase())
            }).map((val) =>{
            return <div className="search_results" key={post.id}>{post.title }</div>
            {val.title}
            })}
        

        </div>
        <div/>
        </div>

    )
}

export default Search;