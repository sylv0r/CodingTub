import React, { useState, useEffect } from 'react';
import AddContent from './addContent/AddContent';
import ShowContent from './showContent/ShowContent';
import './SectionCommunaute.scss'

export default function SectionCommunaute(){
    // state
    const [user, setUser] = useState([]);

    // comportements   
    async function getName() {
        const reponse = await fetch("http://localhost:3001/channels/showNamePp/1", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        })

        const data = await reponse.json();
        setUser(data)
        console.log(data);
    }

    useEffect(() => {
        getName()
    }, [])

    // affichage (render)
    return (
        <div>
            <div className='div_section_communaute'>
                <div className='pdp_name'>
                    <img src="" alt="pdp_utilisateur" className='pdp_utilisateur'></img>
                    <p>{user.name}Sequoia</p>
                </div>
                <AddContent />
            </div>
            <ShowContent />
        </div>
    );
}