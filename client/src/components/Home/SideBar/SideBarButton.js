export default function SideBarButton({name, logo, link}){

    //state

    //comportement
    const handleClick = () => {
        window.location.href = link
    }

    //render

    return(
        <div className="SideBarButton" onClick={handleClick}>
            <a href={link}><i className={`fa-solid fa-${logo}`}></i>{name}</a>
        </div>
    )


}