export default function VideoListRight() {

    return (

        
        <div className="list-right-videos">
        <div className="list-right-container">
            <ul className="playlist-right-list">
                <li className="playlist-right-item">
                    <a href="#">
                    <img src="" alt="" />
                    <div className="playlist-right-item-info">
                        <h3 className="playlist-right-video-title">Nom de la vidéo</h3>
                        <p className="playlist-right-item-infos"><a href='#'>Nom de la chaine</a> nombre de vues - il y a x heures </p>
                        <span className="playlist-right-item-duration">00:00</span>
                    </div>
                    </a>
                </li>
                <li className="playlist-right-item">
                    <a href="#">
                    <img src="" alt="" />
                    <div className="playlist-right-item-info">
                        <h3 className="playlist-right-video-title">Nom de la vidéo</h3>
                        <p className="playlist-right-item-infos"><a href='#'>Nom de la chaine</a> nombre de vues - il y a x heures </p>
                        <span className="playlist-right-item-duration">00:00</span>
                    </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    )

}