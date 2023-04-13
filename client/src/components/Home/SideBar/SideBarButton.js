import { useState, useEffect } from "react"

export default function SideBarButton({name, logo, link, channelId}){

    //state
    const [links, setLinks] = useState([link])
    const [names, setNames] = useState([name])
    const [img, setImg] = useState([])

    //comportement
    const handleClick = () => {
        window.location.href = link
    }

    const getChannel = () => {
        if (channelId != undefined) {
        console.log(channelId)
        fetch(`http://localhost:3001/channels/showNamePp/${channelId}`, {method: "GET", headers: { "Content-Type": "application/json"}})
        .then(response => {
            return response.json()
        })
        .then((json) => {
            console.log(json[0])
            setLinks(`/channel/${json[0].name}`)
            setNames(json[0].name)
            setImg(json[0].image_link)
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
                console.log('Error :', error.message);
              }
        })
    }
    }
    
    useEffect(()=>{
        getChannel()
    }, []) 

    //render

    return(
        <div className="SideBarButton" onClick={handleClick}>

            {channelId != undefined
                ? <a href={links}><img src={img} />{names}</a>
                : <a href={link}><i className={`fa-solid fa-${logo}`}></i>{name}</a>
            }
            
        </div>
    )


}