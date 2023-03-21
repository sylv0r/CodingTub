import './Search.scss';

function Search() {
  return (
    <body className="App">
        
        

        <nav className="recherche">
            <div className="Navsearch">
                <form className="search" action="submit">
                    <input className="searchBar" type="text" />
                    <button className="lanchsubmit" >envoyer</button>
                </form>
                
                <div className="icons">

                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>

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
