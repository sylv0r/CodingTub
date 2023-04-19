import React from 'react'
import AccueilVideos from './OrganisationMenuChaine/AccueilVideos';
import AccueilChaines from './OrganisationMenuChaine/AccueilChaines';

export default function SectionAccueil({ channel_user_id }){
    // state

    // comportements 

    // affichage (render)
    return (
    <div>
        <AccueilVideos />
        <AccueilChaines chaine_user_id={channel_user_id}/>
    </div>
    );
}