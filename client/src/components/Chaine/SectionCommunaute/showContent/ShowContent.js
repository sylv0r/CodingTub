import { useState, useEffect } from 'react'


export default function ShowContent({ action }) {
    // state
    const [contents, setContents] = useState([])

    //comportements
    const getContents = () => {
        fetch(`http://localhost:3001/channels/${action}`, {method: "GET", headers: { "Content-Type": "application/json"}})
            .then(response => {
                return response.json()
            })
            .then((json) => {
                setContents(json)
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
        <div className='show_all_content_communaute'>
            {contents.map((content) => (
                <div className='bloc_content_date_communaute'>
                    <p>{content.content}</p>
                    <p>{content.published_at}</p>
                </div>
            ))}
        </div>
    );
}