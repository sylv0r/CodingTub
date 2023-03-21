import React, { useState } from 'react'; // importez useState pour gérer l'état
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
    <button onClick={() => handleSectionChange('Accueil')}>Accueil</button>
    <button onClick={() => handleSectionChange('Vidéos')}>Vidéos</button>
    <button onClick={() => handleSectionChange('Shorts')}>Shorts</button>
    <button onClick={() => handleSectionChange('Lives')}>Lives</button>
    <button onClick={() => handleSectionChange('Playlists')}>Playlists</button>
    <button onClick={() => handleSectionChange('Communauté')}>Communauté</button>
    <button onClick={() => handleSectionChange('Chaînes')}>Chaînes</button>
    <button onClick={() => handleSectionChange('À Propos')}>À Propos</button>
    {sectionAffichee}
    </div>
    );
}