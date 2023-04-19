import React, { useEffect, useState } from 'react'
import './AccueilChaines.scss'


export default function AccueilChaines({ chaine_user_id }){
    // state
    const [channelsAccueil, setChannelsAccueil] = useState([])
    const [links, setLinks] = useState(['/channel/'])

    // comportements 
    const getChannelsAccueil = async () => {
        await fetch(`http://localhost:3001/channels/showAllChannels/${chaine_user_id}`, {method: "GET", headers: { "Content-Type": "application/json"}})
            .then(response => {
                return response.json()
            })
            .then((json) => {
                setChannelsAccueil(json)
            })
            .catch(error => {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error :', error);
                }
            })    
    }

    useEffect(() => {
        getChannelsAccueil()
    }, [])

    // affichage (render)
    return (
        <div className='accueil_chaine'>
            {channelsAccueil.map((channelAccueil) => (
                <div className='bloc_pdp_name_chaine_accueil'>
                    <a href={links + channelAccueil.name}><img src={process.env.REACT_APP_NGINX_LINK + channelAccueil.image_link} className='pdp_chaine_accueil'></img></a>
                    <a href={links + channelAccueil.name} className='nom_chaine_accueil'><p>{channelAccueil.name}</p></a>
                </div>
            ))}
        </div>
    );
}