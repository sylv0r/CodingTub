import SideBarButton from './SideBarButton'
import './sidebar.scss'

 

export default function SideBar() {

    //state

    //comportement

    //render

    return (
    
        <nav className='wrapper'>
        <SideBarButton className="button" name="Accueil" link="youtube.com" logo="house"/>
        <SideBarButton name="Shorts" link="shorts.com" logo="circle-play"/>
        <SideBarButton name="Abonnements" link="abonnements.com" logo="clapperboard"/>
        <SideBarButton name="Historique" link="historique.com" logo="clock-rotate-left"/>
        <SideBarButton name="À regarder plus tard" link="loiiiiinnnn.com" logo="clock"/>
        <SideBarButton name="Vidéos J'aime" link="/playlist?list=LL" logo="thumbs-up"/>
       
        </nav>

    )
    
}