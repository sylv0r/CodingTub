import SideBarButton from './SideBarButton'
import './sidebar.scss'

 

export default function SideBar() {

    //state

    //comportement

    //render

    return (
    
        <>
        <SideBarButton className="button" name="Accueil" link="/" logo="house"/>
        <SideBarButton name="Shorts" link="/short" logo="circle-play"/>
        <SideBarButton name="Abonnements" link="/subscriptions" logo="clapperboard"/>
        <SideBarButton name="Historique" link="/history" logo="clock-rotate-left"/>
        <SideBarButton name="À regarder plus tard" link="/playlist?list=WL" logo="clock"/>
        <SideBarButton name="Vidéos J'aime" link="/playlist?list=LL" logo="thumbs-up"/>
       
        </>

    )
    
}