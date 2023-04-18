import React, { useState, useEffect } from 'react';
import AddContent from './addContent/AddContent';
import ShowContent from './showContent/ShowContent';
import './SectionCommunaute.scss'

export default function SectionCommunaute({ name }){

    // state
    const [userChannel, setUserChannel] = useState([]);

    // comportements   
    const getNamePpChaine = async () => {
        await fetch(`http://localhost:3001/channels/getNamePpChaine/${name}`, {method: "GET", headers: { "Content-Type": "appplication/json"}})
        .then(response => {
            return response.json()
        })
        .then((json) => {
            setUserChannel(json[0])
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
        getNamePpChaine()
    }, [])

    // affichage (render)
    return (
        <div>
            <div className='div_section_communaute'>
                <div className='pdp_name'>
                    <img src={process.env.REACT_APP_NGINX_LINK+userChannel.image_link} alt="pdp_utilisateur" className='pdp_utilisateur'></img>
                    <p>{userChannel.name}</p>
                </div>
                <AddContent />
            </div>
            <ShowContent action={`getContent/${name}`}/>
        </div>
    );
}