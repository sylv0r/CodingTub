import React, { useEffect, useState } from 'react'
import './SectionChaines.scss'


export default function SectionChaines({ channel_user_id }){
    // state
    const [channels, setChannels] = useState([])
    const [links, setLinks] = useState([])

    // comportements 
    const getChannels = () => {
        fetch(`http://localhost:3001/channels/showAllChannels/${channel_user_id}`, {method: "GET", headers: { "Content-Type": "application/json"}})
            .then(response => {
                return response.json()
            })
            .then((json) => {
                setChannels(json)
                setLinks(`/channel/${json[0].name}`)
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
        getChannels()
    }, [])

    // affichage (render)
    return (
        <div className='section_chaine'>
            {channels.map((channel) => (
                <div className='bloc_pdp_name_chaine'>
                    <a href={links}><img src={process.env.REACT_APP_NGINX_LINK + channel.image_link} className='pdp_chaine'></img></a>
                    <a href={links} className='nom_chaine'><p>{channel.name}</p></a>
                </div>
            ))}
        </div>
    );
}