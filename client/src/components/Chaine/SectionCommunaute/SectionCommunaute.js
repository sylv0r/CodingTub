import React, { useState, useEffect } from 'react';
import AddContent from './addContent/AddContent';
import ShowContent from './showContent/ShowContent';
import './SectionCommunaute.scss'

export default function SectionCommunaute({ infos_communaute }){

    // state

    // comportements

    // affichage (render)
    return (
        <div>
            <div className='div_section_communaute'>
                <div className='pdp_name'>
                    <img src={process.env.REACT_APP_NGINX_LINK+infos_communaute.imageLink.image_link} alt="pdp_utilisateur" className='pdp_utilisateur'></img>
                    <p>{infos_communaute.name}</p>
                </div>
                <AddContent />
            </div>
            <ShowContent action={`getContent/${infos_communaute.name}`}/>
        </div>
    );
}