import './Searchs.scss';
import { useState } from 'react';
import SideBar from '../Home/SideBar/SideBar';
//import './Header.scss';

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
                    <input className="searchBar" placeholder=" Recherche..." type="text" value={value} onChange={handleChange}/> 
                    <button className="lanchsubmit" onClick={() => console.log(value)} >Envoyer</button>
                </div>

                <div className="connect">

                    <a className="not"href="" target="" rel="">
                        <i class="fa-solid fa-bell fa-2x"></i>
                    </a>
                    
                    <a className="pp" href="" target="" rel="">
                        <i class="fa-solid fa-user fa-2x"></i>
                    </a>
                </div>
                
            </div>

            <div className="Navid">
                <div className="hashtag"><a href="">#Vilebrequin</a></div>
                <div className="hashtag"><a href="">#Wankil</a></div>
                <div className="hashtag"><a href="">#Anas</a></div>
                <div className="hashtag"><a href="">#Squeezie</a></div>
                <div className="hashtag"><a href="">#Pokimane</a></div>
                <div className="hashtag"><a href="">#Amouranth</a></div>
                <div className="hashtag"><a href="">#FuzeIII</a></div>
                <div className="hashtag"><a href="">#LeBouzeuh</a></div>
                <div className="hashtag"><a href="">#Louis-san</a></div>
                <div className="hashtag"><a href="">#Locklear</a></div>

            </div>
        </nav>

    </header>
    );
}

export default Search;
