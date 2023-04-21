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
        if (localStorage.getItem("jwt") === null) {
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

    function handleChange(event) {
        setvalue(event.target.value)
    }

    const handleChannel = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:3001/channels/redirectChannel", {
            headers: {
                authorization: localStorage.getItem("jwt")
            }
        })
        const json = await response.json()
        if (!json.error) {
            if (json.results.length > 0) {
                window.location.replace(`http://localhost:3000/channel/${json.results[0].name}`);
            } else {
                window.location.replace("http://localhost:3000/createChannel");
            }
        }
    }

    const url = process.env.REACT_APP_NGINX_LINK;

    return (

        <header className="body">

            <nav className="recherche">
                <div className="Navsearch">

                    <a className="logo" href=" " rel="">
                        <img src={url + "logo/logo_codingtub.png"} alt="Logo CodingTube" className="icon_title" width="100" />
                    </a>

                    <div className="search" action="submit">
                        <Search2 />
                    </div>

                <div className="connect">
                    {localStorage.getItem("jwt") ?
                        <div className='connected-icons'>
                            <a className="pp" style={{ cursor: "pointer" }} target="" rel="" onClick={(e) => handleChannel(e)}>
                                <i class="fa-solid fa-video fa-2x"></i>
                            </a>

                            <a className="pp" href="/createChannel" target="" rel="">
                                <i class="fa-solid fa-plus fa-2x"></i>
                            </a>
                            <a className="pp" href="/modifyProfile" target="" rel="">
                                <i className="fa-solid fa-user fa-2x"></i>
                            </a>
                        </div>
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
