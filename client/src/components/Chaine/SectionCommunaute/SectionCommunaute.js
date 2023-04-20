import React, { useState, useEffect } from 'react';
import AddContent from './addContent/AddContent';
import ShowContent from './showContent/ShowContent';
import './SectionCommunaute.scss'

export default function SectionCommunaute({ infos_communaute }){

    // state

    const [linksSectionCommu, setLinksSectionCommu] = useState([`/channel/${infos_communaute.name}`])
    const user_id = localStorage.getItem("user_id");

    // comportements

    // affichage (render)
    if(user_id == infos_communaute.idUserChaine.user_id) {
        return (
            <div>
                <div className='div_section_communaute'>
                    <div className='pdp_name'>
                        <a href={linksSectionCommu}><img src={process.env.REACT_APP_NGINX_LINK+infos_communaute.imageLink.image_link} alt="pdp_utilisateur" className='pdp_utilisateur'></img></a>
                        <a href={linksSectionCommu} className='nom_chaine_section_commu'><p>{infos_communaute.name}</p></a>
                    </div>
                    <AddContent pre_infos_commu={infos_communaute.idChaine.id}/>
                </div>
                <ShowContent action={`getContent/${infos_communaute.name}`} infos_show_comu={{infos_communaute}}/>
            </div>
        );
    }
    else {
        return (
            <div>
                <ShowContent action={`getContent/${infos_communaute.name}`} infos_show_comu={{infos_communaute}}/>
            </div>
        );
    }

    
}