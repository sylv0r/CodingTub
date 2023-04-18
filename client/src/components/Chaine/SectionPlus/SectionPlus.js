import React from 'react'
import './SectionPlus.scss'

export default function SectionPlus({ infos }){
    // state

    const date = new Date(infos.creationChannel.created_at);

    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const annee = date.getFullYear();
    const idMois = date.getMonth();
    const nomMois = monthNames[idMois];
    const jour = date.getDate();

    const formattedDate = `${jour} ${nomMois} ${annee}`;

    // comportements 

    // affichage (render)
    return (
        <div className='section_a_propos'>
            <div className='section_a_propos_description'>
                <h3 className='infos_description'>Description</h3>
                <p className='description_channel'>{infos.descriptionChannel.description}</p>
            </div>
            <div className='section_a_propos_statistiques'>
                <h3 className='infos_stats'>Statistiques</h3>
                <p className='infos_date_creation'>Actif depuis le {formattedDate}</p>
                <p className='infos_stats'>{infos.subscribersChannel.subscribers} abonné.e.s</p>
                <p className='infos_stats'>{infos.nbVideosChannel.number_videos} vidéo.s</p>
            </div>
        </div>
    );
}