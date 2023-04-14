import './Searchs.scss';
import { useState } from 'react';
//import Hashtag from "./hashtag"

function Search() {

    const data = [/*{chaine}, {profil}, {hashtag}, {video},*/"Chocolat", "Chien", "chat", "Café", "Cafeine"];

    const [value, setvalue] = useState("  ");

    function handleChange (event) {
        setvalue(event.target.value)
    }

    return (

    <header className="body">

        <nav className="recherche">
            <div className="Navsearch">

                <a className="logo" href="#" target="" rel="">
                    <img src="assets/img_header/Project_title_picture.png" alt="Logo CodingTube" class="icon_title" width="100" />  
                </a>

                <div className="search" action="submit">
                    <input className="searchBar" placeholder="Rechercher" type="text" value={value} onChange={handleChange}/> 
                    <button className="lanchsubmit" onClick={() => console.log(value)} >Envoyer</button>
                </div>

                <div className="connect">

                    <a className="not"href="" target="" rel="">
                        <i class="fa-solid fa-bell fa-2x"></i>
                    </a>
                    
                    <a className="pp" href="/connexion" target="" rel="">
                        <i class="fa-solid fa-user fa-2x"></i>
                    </a>
                </div>
                
            </div>

            <div className="Navid">
            

             
            </div>
            
        </nav>

    </header>
    );
}

export default Search;
