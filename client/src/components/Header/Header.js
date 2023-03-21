import Logo_Tube from './img_header/Project_title_picture.png';
import Logo_Notif from './img_header/cloche_notification.png';
import Logo_profil from './img_header/Profil_picture.png';
import "./Header.scss";

function Header(){
    return(
        <div class="conteneur">
            <div>
                <h1>
                    <a href="#" target="" rel="">
                        <span>
                            <img src={Logo_Tube} alt="Logo CodingTube" class="Logo_Project" />
                        </span>
                    </a>
                </h1>
            </div>
            <div>
                <a href="" target="" rel="">
                    <span>
                        <img src={Logo_Notif} alt="Notifications" class="Logo_Notification_Project"/>
                    </span>
                </a>
            </div>
            <div>
                <a href="" target="" rel="">
                    <span>
                        <img src={Logo_profil} alt="Profil" class="Logo_Profil_Project"/>
                    </span>
                </a>
            </div>
        </div>
    )
}
export default Header;