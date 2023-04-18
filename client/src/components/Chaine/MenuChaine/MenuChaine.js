import React, { useState, useEffect } from 'react'; // importez useState pour gérer l'état
import './MenuChaine.scss'
import SectionAccueil from '../SectionAccueil/SectionAccueil'
import SectionVideos from '../SectionVideos/SectionVideos'
import SectionShorts from '../SectionShorts/SectionShorts'
import SectionLives from '../SectionLives/SectionLives'
import SectionPlaylists from '../SectionPlaylists/SectionPlaylists'
import SectionCommunaute from '../SectionCommunaute/SectionCommunaute'
import SectionChaines from '../SectionChaines/SectionChaines'
import SectionPlus from '../SectionPlus/SectionPlus'
import Profile from '../../Profile/Profile'

export default function MenuChaine() {
    // state
    const [sectionAffichee, setSectionAffichee] = useState(<SectionAccueil />);
    const [idChaine, setIdChaine] = useState([])

    var currentUrl = window.location.href

    var split = currentUrl.split('/')
    var name = split[split.length-1]
    
    // comportements
    const getChannelId = async () => {
        await fetch(`http://localhost:3001/channels/getChannelId/${name}`, {method: "GET", headers: { "Content-Type": "appplication/json"}})
        .then(response => {
            return response.json()
        })
        .then((json) => {
            setIdChaine(json[0])
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
        getChannelId()
    }, [])


    const handleSectionChange = (section) => {
    switch (section) {
    case 'Accueil':
    setSectionAffichee(<SectionAccueil />);
    break;
    case 'Vidéos':
    setSectionAffichee(<SectionVideos name={name} />);
    break;
    case 'Shorts':
    setSectionAffichee(<SectionShorts />);
    break;
    case 'Lives':
    setSectionAffichee(<SectionLives />);
    break;
    case 'Playlists':
    setSectionAffichee(<SectionPlaylists />);
    break;
    case 'Communauté':
    setSectionAffichee(<SectionCommunaute name={name}/>);
    break;
    case 'Chaînes':
    setSectionAffichee(<SectionChaines channel_user_id={idChaine.id}/>);
    break;
    case 'À Propos':
    setSectionAffichee(<SectionPlus />);
    break;
    default:
    setSectionAffichee(<SectionAccueil />);
    }
    };

    // affichage (render)
    return (
    <div className='body_menu_chaine'>
    <Profile />
    <div id="buttons">
    <button className='sections_menu' onClick={() => handleSectionChange('Accueil')}>Accueil</button>
    <button className='sections_menu' onClick={() => handleSectionChange('Vidéos')}>Vidéos</button>
    <button className='sections_menu' onClick={() => handleSectionChange('Shorts')}>Shorts</button>
    <button className='sections_menu' onClick={() => handleSectionChange('Lives')}>Lives</button>
    <button className='sections_menu' onClick={() => handleSectionChange('Playlists')}>Playlists</button>
    <button className='sections_menu' onClick={() => handleSectionChange('Communauté')}>Communauté</button>
    <button className='sections_menu' onClick={() => handleSectionChange('Chaînes')}>Chaînes</button>
    <button className='sections_menu' onClick={() => handleSectionChange('À Propos')}>À Propos</button>
    </div>
    {sectionAffichee}
    </div>
    );
}