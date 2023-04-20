import './Searchs.scss';
import React, { useState, useEffect } from 'react';
import ControlledCarousel from "./hashtag/Hashtag"
import Hashtag from "./hashtag/Hashtag"
import Search2 from './Search_bar/searchbar';
import { useLocation } from 'react-router-dom';
//import './Header.scss';

function Search() {

    let location = useLocation()
    let homePage = location.pathname === '/'

    useEffect(() => {
        if(localStorage.getItem("jwt") === null) {
            document.getElementsByClassName("logoutBtn")[0].innerHTML = "Login";
        } else {
            document.getElementsByClassName("logoutBtn")[0].innerHTML = "Logout";
        }
    }, []);


    const logout = () => {
        localStorage.removeItem("hashed_user_id");
        localStorage.removeItem("jwt");
        window.location.href = "/connexion";
    }

    const data = [/*{chaine}, {profil}, {hashtag}, {video},*/"Chocolat", "Chien", "chat", "Café", "Cafeine"];

    const [value, setvalue] = useState("  ");

    function handleChange (event) {
        setvalue(event.target.value)
    }

    return (

        <header className="body">

            <nav className="recherche">
                <div className="Navsearch">

                    <a className="logo" href=" " rel="">
                        <img src="assets/img_header/Project_title_picture.png" alt="Logo CodingTube" className="icon_title" width="100" />
                    </a>

                    <div className="search" action="submit">
                        <Search2 />
                    </div>

                <div className="connect">

                    <a className="not"href="" target="" rel="">
                        <i className="fa-solid fa-bell fa-2x"></i>
                    </a>

                    {localStorage.getItem("jwt") ?
                        <a className="pp" href="/modifyProfile" target="" rel="">
                            <i className="fa-solid fa-user fa-2x"></i>
                        </a>
                    : 
                    <a className="pp" href="/connexion" target="" rel="">
                            <i className="fa-solid fa-user fa-2x"></i>
                        </a>
                    }
                        

                    <p onClick={logout} className='logoutBtn'>Logout</p>

                </div>
                
            </div>

                {homePage &&
                    <div className="Navid">
                    {Hashtag}
                    <ControlledCarousel />

                </div>}

            </nav>

        </header>
    );
}

export default Search;
