import { useState } from "react";
import './Searchs.scss';
import Logo_Tube from './img_header/Project_title_picture.png';
import Logo_Notif from './img_header/cloche_notification.png';
import Logo_profil from './img_header/Profil_picture.png';
import axios from 'axios';



function Search() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const test = ()=>{
    
  }
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
  
    <div className="body">

        <div className="side"></div>

        <nav className="recherche">
        
            <div className="Navsearch">

                <a className="logo" href="#" target="" rel="">
                    <img src={Logo_Tube} alt="Logo CodingTube" class="icon_title" />  
                </a>

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

                <div className="connect">
                    
                    <a className="not"href="" target="" rel="">
                        
                        <img src={Logo_Notif} alt="Notifications" class="icon_notification"/>
                        
                    </a>
                    
                    <a className="pp" href="" target="" rel="">
                        
                        <img src={Logo_profil} alt="Profil" class="icon_profile"/>
                        
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

    </div>
    );
}

export default Search;
