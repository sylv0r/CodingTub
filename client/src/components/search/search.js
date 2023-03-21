import './Search.scss';

function Search() {
  return (
    <body className="App">
        
        

        <nav className="recherche">
            <div className="Navsearch">
                <form className="search" action="submit">
                    <input className="searchBar" placeholder=" Recherche..." type="text" /> 
                    <button className="lanchsubmit" >envoyer</button>
                </form>
                
                <div className="icons">

                    <div className="icon"><a href=""><img src="" alt="" /></a></div>
                    <div className="icon"><a href=""></a></div>
                    <div className="icon"><a href=""></a></div>

                </div>
            </div>

            <div className="Navid">
                <div className="icoon"><a href="">#Vilebrequin</a></div>
                <div className="icoon"><a href="">#Wankil</a></div>
                <div className="icoon"><a href="">#Anas</a></div>
                <div className="icoon"><a href="">#Squeezie</a></div>
                <div className="icoon"><a href="">#Pokimane</a></div>
                <div className="icoon"><a href="">#Amouranth</a></div>
                <div className="icoon"><a href="">#FuzeIII</a></div>
                <div className="icoon"><a href="">#LeBouzeuh</a></div>
                <div className="icoon"><a href="">#Louis-san</a></div>
                <div className="icoon"><a href="">#Locklear</a></div>


            </div>    

        </nav>

    </body>
    );
}

export default Search;
