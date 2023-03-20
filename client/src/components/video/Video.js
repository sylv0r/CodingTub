import React from 'react';


const Video = () => {
    return (
        <div id='video'>
           

       
            <Player ref={(player) => { this.player = player }}>
                <source src="/Users/sylvian/Documents/GitHub/CodingTub/client/src/fichier_video/sylvianladingz.mp4" />
            </Player>

            
        </div>
    );
};

export default Video;