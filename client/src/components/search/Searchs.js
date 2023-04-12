import './Searchs.scss';

import React from "react";
import { useState,useEffect } from 'react';
import Hashtag from "./hashtag";
import Search2 from "./searchbar";

function Search() {

    const data = [/*{chaine}, {profil}, {hashtag}, {video},*/"Chocolat", "Chien", "chat", "Café", "Cafeine"];

    const [value, setvalue] = useState("  ");

    function handleChange (event) {
        setvalue(event.target.value)
    }

    return (

    <header className="body">

        <div className="side"></div>

        <nav className="recherche">
            <div className="Navsearch">

                <a className="logo" href="#" target="" rel="">
                    <img src="assets/img_header/Project_title_picture.png" alt="Logo CodingTube" className="icon_title" />  
                </a>

               <Search2 />
                
                <div className="connect">

                    <a className="not"href="" target="" rel="">
                        <img src="../../../public/assets/img_header/cloche_notification.png" alt="" className="icon_notification"/>
                    </a>
                    
                    <a className="pp" href="" target="" rel="">
                        <img src="../../../public/assets/img_header/Profil_picture.png" alt="" className="icon_profile"/>
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
