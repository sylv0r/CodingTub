import { useState } from "react";
import './Searchs.scss';
<<<<<<< HEAD
import Logo_Tube from './img_header/Project_title_picture.png';
import Logo_Notif from './img_header/cloche_notification.png';
import Logo_profil from './img_header/Profil_picture.png';
import axios from 'axios';



function Search() {
  const [value, setValue] = useState("");
=======
import { useState } from 'react';
import Hashtag from "./hashtag"

function Search() {
>>>>>>> recherche

    const data = [/*{chaine}, {profil}, {hashtag}, {video},*/"Chocolat", "Chien", "chat", "Café", "Cafeine"];

<<<<<<< HEAD
  const test = ()=>{
    
  }
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
  
    <div className="body">
=======
    const [value, setvalue] = useState("  ");

    function handleChange (event) {
        setvalue(event.target.value)
    }

    return (

    <header className="body">
>>>>>>> recherche

        <div className="side"></div>

        <nav className="recherche">
            <div className="Navsearch">

                <a className="logo" href="#" target="" rel="">
                    <img src="assets/img_header/Project_title_picture.png" alt="Logo CodingTube" class="icon_title" />  
                </a>

<<<<<<< HEAD
                <form className="search" action="submit">
                    <input className="searchBar"  type="text" value={value} onChange={onChange} onClick={()=> test()}/> 
                    <button className="lanchsubmit" onClick={() => onSearch(value)}>envoyer</button>
                    <div className="dropdown">
          {keyValueList
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
                    <div className="voc">
                        <a href="">
                            <img src="" alt="" />
                        </a>
                    </div>
                </form>
=======
                <div className="search" action="submit">
                    <input className="searchBar" placeholder=" Recherche..." type="text" value={value} onChange={handleChange}/> 
                    <button className="lanchsubmit" onClick={() => console.log(value)} >envoyer</button>
                </div>
                <ul>
                    {value && 
                        data
                        .filter((element) => element.includes(value))
                        .map((element, index) => <li onClick={() => 
                        setvalue(element)} key={index}>{element}</li>)
                    }
                </ul>
>>>>>>> recherche

                <div className="connect">

                    <a className="not"href="" target="" rel="">
                        <img src="../../../public/assets/img_header/cloche_notification.png" alt="" class="icon_notification"/>
                    </a>
                    
                    <a className="pp" href="" target="" rel="">
                        <img src="../../../public/assets/img_header/Profil_picture.png" alt="" class="icon_profile"/>
                    </a>
                </div>
                
            </div>

            <div className="Navid">

                {Hashtag}

            </div>
        </nav>

    </header>
    );
}

export default Search;
