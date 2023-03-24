export default function SideBarButton({name, logo, link}){

    //state

    //comportement

    //render

    return(
        <div className="SideBarButton">
            <a href={link}><i className={`fa-solid fa-${logo}`}></i>{name}</a>
        </div>
    )


}