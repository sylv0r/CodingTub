import React, { useState, useEffect } from 'react';
import './OtherUserChannel.scss';

export default function OtherUserChannel({ action }) {

    const localId = localStorage.getItem('user_id');

    if (!localId) {

        window.location.href= '/connexion';

    };

    const [users, setUsers] = useState([]);
    const [buttonText, setButtonText] = useState(localStorage.getItem("buttonText") || "S'abonner");
    const [buttonColor, setButtonColor] = useState(localStorage.getItem("buttonColor") || "black");

    const getOtherUserChannel = async() => {

        await fetch(`http://localhost:3001/users/${action}`, {method:"GET", headers: {"Content-Type": "application/json"}}).then(response => {

            return response.json();

        }).then((json) => {

            console.log(json);
            setUsers(json);

        }).catch(error => {

            console.log(error);

        });

    };

    useEffect(() => {

        getOtherUserChannel();

    }, []);

    function subscribed() {

        if(buttonText === "S'abonner") {

            setButtonText("Se désabonner");
            setButtonColor("blue");

        } else {

            setButtonText("S'abonner");
            setButtonColor("black");

        };

        localStorage.setItem("buttonText", buttonText);
        localStorage.setItem("buttonColor", buttonColor);

    };

    return (

        <><div className='wrapperProfile'>

            <div className='profileUser'>

                <img id='pictureUser' src={users.image_link}></img>

            </div>

            <div className='profileUser'>

                {users.map(user => (

                    <div key={user.id}>

                        <p className='pseudoUsername'>{user.name}</p>
                        <p>{user.subscribers} abonnés {user.number_videos} vidéos</p>
                        <p>{user.description}</p>

                    </div>

                ))}

            </div>

            <div className='profileUser'>

                <button id='subscribeButton' type='submit' onClick={subscribed} style={{backgroundColor: buttonColor}}>{buttonText}</button>

            </div>

        </div></>

    );

};