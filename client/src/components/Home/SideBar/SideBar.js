import SideBarButton from './SideBarButton'
import './sidebar.scss'
import { useState, useEffect } from 'react'
 

export default function SideBar() {

    //state
    const [channels, setChannels] = useState([])

    let user = localStorage.getItem('user_id')

    //comportement
    const getChannels = async () => {
        await fetch(`http://localhost:3001/channels/getSubscriptions/${user}`, {method: "GET", headers: { "Content-Type": "application/json"}})
            .then(response => {
                return response.json()
            })
            .then((json) => {
                //console.log(json)
                setChannels(json)
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

    useEffect(()=>{
        getChannels()
    }, []) 

    //render

    return (
    
        <>
        <div id='main-links'>
            <SideBarButton className="button" name="Accueil" link="/" logo="house"/>
            <SideBarButton name="Shorts" link="/short" logo="circle-play"/>
            <SideBarButton name="Abonnements" link="/subscriptions" logo="clapperboard"/>
            <SideBarButton name="Historique" link="/history" logo="clock-rotate-left"/>
            <SideBarButton name="À regarder plus tard" link="/playlist?list=WL" logo="clock"/>
            <SideBarButton name="Vidéos J'aime" link="/playlist?list=LL" logo="thumbs-up"/>
        </div>
        <hr />
        <div id='abonnements'>
            <h5>Abonnements</h5>
            {channels.map((channel) => (
                <SideBarButton channelId={channel.id_channel} key={channel.id}/>
            ))}
        </div>
        </>

    )
    
}