import './Searchs.scss';
import { useState } from 'react';
import Hashtag from "./hashtag"

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
                    <img src="assets/img_header/Project_title_picture.png" alt="Logo CodingTube" class="icon_title" />  
                </a>

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
