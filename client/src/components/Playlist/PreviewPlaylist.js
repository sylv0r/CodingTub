import React from 'react';
import './../style/PreviewPlaylist.scss';

export default function PreviewPlaylist(){

    return(

        <div className='container2'>
            <div className='preview-videos'>
                <div className='display-videos'>
                    <img src="" alt="" />
                </div>
                <div className='display-text'>
                    <h2>Vidéos</h2>
                    <p>User</p>
                    <p>x vidéos - Mise à jour aujourd'hui</p>
                </div>
                <div className='display-buttons'>
                    <input type="button" value="Play" className='display-button' id='button-play'></input>
                    <input type="button" value="Aléatoire" className='display-button' id='button-random'></input>
                </div>
            </div>
        </div>

    )

    


}