import React, { useState, useEffect } from 'react';
import './UserChannel.scss';
import axios from 'axios';

export default function UserChannel({ action }) {

    // Déclare la variable local pour la connexion

    /* axios.post('http://localhost:3001/users/getUserId', {
        hashedUserId : JSON.parse(localStorage.getItem('hashed_user_id'))
    })
    .then(response => {
        console.log('user Id', response.data);
        const localId = response.data;
    })
    .catch(error => {
        console.log('error', error.response.data)
    }); */

    const localId = localStorage.getItem('user_id');

    // Si on n'est pas connecté, renvoie vers la page connexion

    if (!localId) {
        window.location.href= '/connexion';
    };

    // Déclare les variables
    const [buttonText, setButtonText] = useState(localStorage.getItem("buttonText") || "S'abonner");
    const [buttonColor, setButtonColor] = useState(localStorage.getItem("buttonColor") || "black");

    // Concerne le bouton "s'abonner"

    const subscribed = () => {
        if (buttonText === "S'abonner") {
            handleSubscription(action.id_channel, localId, "subscribe");
        } else {
            handleSubscription(action.id_channel, localId, "unsubscribe");
        }
    };

    const handleSubscription = async (channelId, userId, action) => {
        try {
            if (action === "subscribe") {
            await axios.post('/api/subscribe', { channelId, userId });
            setButtonText("Se désabonner");
            setButtonColor("blue");
            } else if (action === "unsubscribe") {
            await axios.post('/api/unsubscribe', { channelId, userId });
            setButtonText("S'abonner");
            setButtonColor("black");
            }
        } catch (error) {
          console.log(error);
        }
    };

    // Partie HTML

    return (
        <div className='wrapperUserProfile'>
            <div className='profileUserBis'>
                <img id='pictureUserBis' src={process.env.REACT_APP_NGINX_LINK + action.imageLink.image_link} alt='profile' />
            </div>
            <div className='profileUserBis'>
                {/* Récupère les données de la base de données grâce à la requête SQL */}
                <p className='pseudoUsername'>{action.name}</p>
                <p>{action.subscribersChannel.subscribers} abonnés {action.nbVideosChannel.number_videos} vidéos</p>
                <p className='descriptionChannel'>{action.descriptionChannel.description_channel}</p>
            </div>
            <div className='profileUserBis'>
                <button className='updateUserProfile' type='submit' onClick={subscribed} style={{ backgroundColor: buttonColor }}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};