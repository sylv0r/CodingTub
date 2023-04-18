import './Searchs.scss';
import ControlledCarousel from "./hashtag/Hashtag";
import Search2 from './search_bar/SearchBar';
import Hashtag from "./hashtag/Hashtag";
import React from 'react';

function Search() {
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

                        <a className="not" href="" target="" rel="">
                            <i class="fa-solid fa-bell fa-2x"></i>
                        </a>

                        <a className="pp" href="/connexion" target="" rel="">
                            <i className="fa-solid fa-user fa-2x"></i>
                        </a>
                    </div>

                </div>

                <div className="Navid">
                    {Hashtag}
                    <ControlledCarousel />


                </div>

            </nav>

        </header>
    );
}

export default Search;
