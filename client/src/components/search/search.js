import './Search.scss';
import Logo_Tube from './img_header/Project_title_picture.png';
import Logo_Notif from './img_header/cloche_notification.png';
import Logo_profil from './img_header/Profil_picture.png';
//import './Header.scss';

function Search() {
  return (
    <body className="App">
        <div className="icon">
            <div>
                <h1>
                    <a href="#" target="" rel="">
                        <span>
                            <img src={Logo_Tube} alt="Logo CodingTube" class="icon_title" />
                        </span>
                    </a>
                </h1>
            </div>
        </div>
        <nav className="recherche">
            <div className="Navsearch">
                <form className="search" action="submit">
                    <input className="searchBar" placeholder=" Recherche..." type="text" /> 
                    <button className="lanchsubmit" >envoyer</button>
                </form>
                
                <div className="icons">
                    <div>
                        <a href="" target="" rel="">
                            <span>
                                <img src={Logo_Notif} alt="Notifications" class="icon_notification"/>
                            </span>
                        </a>
                    </div>
                        
                    <div>
                        <a href="" target="" rel="">
                            <span>
                                <img src={Logo_profil} alt="Profil" class="icon_profile"/>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="Navid">
                <div className="icoon"></div>
                <div className="icoon"></div>
                <div className="icoon"></div>
                <div className="icoon"></div>
                <div className="icoon"></div>
                <div className="icoon"></div>
                <div className="icoon"></div>
                <div className="icoon"></div>
                <div className="icoon"></div>

            </div>    

        </nav>

    </body>
    );
}

export default Search;
