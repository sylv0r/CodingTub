import React, { useState, useEffect } from 'react';
import AddContent from './addContent/AddContent';
import ShowContent from './showContent/ShowContent';
import './SectionCommunaute.scss'

export default function SectionCommunaute(){

    // state
    const [userChannel, setUserChannel] = useState([]);

    var currentUrl = window.location.href

    var split = currentUrl.split('/')
    var name = split[split.length-1]
    console.log(name)

    // comportements   
    const showNamePp = async () => {
        await fetch(`http://localhost:3001/channels/showNamePp/${name}`, {method: "GET", headers: { "Content-Type": "appplication/json"}})
        .then(response => {
            return response.json()
        })
        .then((json) => {
            console.log(json)
            setUserChannel(json)
        })
    }

    useEffect(() => {
        showNamePp()
    }, [])

    // affichage (render)
    return (
        <div>
            <div className='div_section_communaute'>
                <div className='pdp_name'>
                    <img src='{userChannel.image_link}' alt="pdp_utilisateur" className='pdp_utilisateur'></img>
                    <p>{userChannel.name}Sequoia</p>
                </div>
                <AddContent />
            </div>
            <ShowContent />
        </div>
    );
}