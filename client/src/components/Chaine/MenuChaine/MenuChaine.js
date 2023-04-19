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
    const [idChaine, setIdChaine] = useState([])
    const [imageLink, setImageLink] = useState([])
    const [idUserChaine, setIdUserChaine] = useState([])
    const [descriptionChannel, setDescriptionChannel] = useState([])
    const [creationChannel, setCreationChannel] = useState([])
    const [subscribersChannel, setSubscribersChannel] = useState([])
    const [nbVideosChannel, setNbVideosChannel] = useState([])

    const [sectionAffichee, setSectionAffichee] = useState(<SectionAccueil />);

    var currentUrl = window.location.href

    var split = currentUrl.split('/')
    var name = split[split.length-1]
    
    // comportements
    const getChannelUserId = () => {
        fetch(`http://localhost:3001/channels/getInfosChannel/${name}`, {method: "GET", headers: { "Content-Type": "appplication/json"}})
        .then(response => {
            return response.json()
        })
        .then((json) => {
            setIdChaine(json[0])
            setImageLink(json[0])
            setIdUserChaine(json[0])
            setDescriptionChannel(json[0])
            setCreationChannel(json[0])
            setSubscribersChannel(json[0])
            setNbVideosChannel(json[0])
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
        getChannelUserId()
    }, [])



    const handleSectionChange = (section) => {
    switch (section) {
    case 'Accueil':
    setSectionAffichee(<SectionAccueil channel_user_id={idUserChaine.user_id}/>);
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
    setSectionAffichee(<SectionCommunaute infos_communaute={{idChaine, name, imageLink}}/>);
    break;
    case 'Chaînes':
    setSectionAffichee(<SectionChaines channel_user_id={idUserChaine.user_id}/>);
    break;
    case 'À Propos':
    setSectionAffichee(<SectionPlus infos={{descriptionChannel, creationChannel, subscribersChannel, nbVideosChannel}}/>);
    break;
    default:
    setSectionAffichee(<SectionAccueil channel_user_id={idUserChaine.user_id}/>);
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