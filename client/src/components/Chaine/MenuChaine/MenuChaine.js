import React, { useState } from 'react'; // importez useState pour gérer l'état
import './MenuChaine.scss'
import SectionAccueil from '../SectionAccueil/SectionAccueil'
import SectionVideos from '../SectionVideos/SectionVideos'
import SectionShorts from '../SectionShorts/SectionShorts'
import SectionLives from '../SectionLives/SectionLives'
import SectionPlaylists from '../SectionPlaylists/SectionPlaylists'
import SectionCommunaute from '../SectionCommunaute/SectionCommunaute'
import SectionChaines from '../SectionChaines/SectionChaines'
import SectionPlus from '../SectionPlus/SectionPlus'

export default function MenuChaine() {
    // state
    const [sectionAffichee, setSectionAffichee] = useState(<SectionAccueil />);
    
    // comportements
    const handleSectionChange = (section) => {
    switch (section) {
    case 'Accueil':
    setSectionAffichee(<SectionAccueil />);
    break;
    case 'Vidéos':
    setSectionAffichee(<SectionVideos />);
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
    setSectionAffichee(<SectionCommunaute />);
    break;
    case 'Chaînes':
    setSectionAffichee(<SectionChaines />);
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
    <div>
    <button className='sections_menu' onClick={() => handleSectionChange('Accueil')}>Accueil</button>
    <button className='sections_menu' onClick={() => handleSectionChange('Vidéos')}>Vidéos</button>
    <button className='sections_menu' onClick={() => handleSectionChange('Shorts')}>Shorts</button>
    <button className='sections_menu' onClick={() => handleSectionChange('Lives')}>Lives</button>
    <button className='sections_menu' onClick={() => handleSectionChange('Playlists')}>Playlists</button>
    <button className='sections_menu' onClick={() => handleSectionChange('Communauté')}>Communauté</button>
    <button className='sections_menu' onClick={() => handleSectionChange('Chaînes')}>Chaînes</button>
    <button className='sections_menu' onClick={() => handleSectionChange('À Propos')}>À Propos</button>
    {sectionAffichee}
    </div>
    );
}