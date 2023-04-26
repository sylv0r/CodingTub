import { useState, useEffect } from 'react'


export default function ShowContent({ action }) {
    // state
    const [contents, setContents] = useState([])
    const [timeContent, setTimeContent] = useState([])
    const [links, setLinks] = useState([])

    let currentdate = new Date(); 
    let contentPublicationDate = new Date(timeContent);

    let difference = (currentdate.getTime() - contentPublicationDate.getTime()) / 1000

    if (difference < 60) {
        difference = Math.round(difference)
        difference === 1 ? difference += " seconde" : difference += " secondes"
    }
    else if (difference < 3600) {
        difference = Math.round(difference / 60)
        difference === 1 ? difference += " minute" : difference += " minutes"
    }
    else if (difference < 86400) {
        difference = Math.round(difference / 60 / 60)
        difference === 1 ? difference += " heure" : difference += " heures"
    }
    else if (difference < 604800) {
        difference = Math.round(difference / 60 / 60 / 24)
        difference === 1 ? difference += " jour" : difference += " jours"
    }
    else if (difference < 2592000) {
        difference = Math.round(difference / 60 / 60 / 24 / 7)
        difference === 1 ? difference += " semaine" : difference += " semaines"
    }
    else if (difference < 31104000) {
        difference = Math.round(difference / 60 / 60 / 24 / 30) + " mois"
    }
    else {
        difference = Math.round(difference / 60 / 60 / 24 / 30 / 12)
        difference === 1 ? difference += " an" : difference += " ans"
    }

    //comportements
    const getContents = () => {
        fetch(`http://localhost:3001/channels/${action}`, {method: "GET", headers: { "Content-Type": "application/json"}})
            .then(response => {
                return response.json()
            })
            .then((json) => {
                setContents(json)
                setTimeContent(json[0].published_at)
                setLinks(`/channel/${json[0].name}`)
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
        getContents()
    }, [])

    // affichage
    return (
        <div>
            {contents.map((content) => (
                <div className='show_all_content_communaute'>
                    <div className='pdp_name_time_commu'>
                        <div className='pdp_chaine_name_commu'>
                            <a href={links}><img src={process.env.REACT_APP_NGINX_LINK + content.image_link} className='pdp_chaine_commu'></img></a>
                            <a href={links} className='nom_chaine_commu'><p>{content.name}</p></a>
                        </div>
                        <p>il y a {difference}</p>
                    </div>
                    <div className='bloc_content_communaute'>
                        <p>{content.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}