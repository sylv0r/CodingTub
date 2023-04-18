import React, { useState, useEffect } from 'react';
import './UserChannel.scss';
import './OtherUserChannel.scss';
import axios from 'axios';
import profilePhoto from './chat.jpg';

export default function UserChannel({ action, name }) {
    const localId = localStorage.getItem('user_id');

    if (!localId) {
        window.location.href= '/connexion';
    };

    var currentUrl = window.location.href
    var split = currentUrl.split('/')
    var username = split[split.length-1]

    console.log(username)

    const [users, setUsers] = useState([]);
    const [buttonText, setButtonText] = useState(localStorage.getItem("buttonText") || "S'abonner");
    const [buttonColor, setButtonColor] = useState(localStorage.getItem("buttonColor") || "black");

    const getUserChannel = async () => {
        const endpoint = action ? `http://localhost:3001/users/${action}` : `http://localhost:3001/users/getUserBis/${name}`;
        const id = action ? action : localId;
        try {
            const response = await axios.post(endpoint, { id });
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserChannel();
    }, []);

    const subscribed = () => {
        if (buttonText === "S'abonner") {
            setButtonText("Se désabonner");
            setButtonColor("blue");
        } else {
            setButtonText("S'abonner");
            setButtonColor("black");
        }
        localStorage.setItem("buttonText", buttonText);
        localStorage.setItem("buttonColor", buttonColor);
    };

    return (
        <>
            <div className='wrapperProfile'>
                <div className='profileUser'>
                    <img id='pictureUser' src={users.image_link || profilePhoto} alt='profile' />
                </div>
                <div className='profileUser'>
                    {users.map((user, index) => (
                        <div key={index}>
                            <p className='pseudoUsername'>{user.name}</p>
                            <p>{user.subscribers} abonnés {user.number_videos} vidéos</p>
                            <p>{user.description}</p>
                        </div>
                    ))}
                </div>
                {action ? (
                    <div className='profileUser'>
                        <button id='subscribeButton' type='submit' onClick={subscribed} style={{ backgroundColor: buttonColor }}>
                            {buttonText}
                        </button>
                    </div>
                ) : (
                    <div className='profileUser'>
                        <button id='updateUserProfile' type='submit'>
                            Personnaliser sa chaîne
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};
