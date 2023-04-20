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

    localStorage.setItem("localChannelId", action.idChaine.id)

    const localChannelId = localStorage.getItem('localChannelId')

    // Si on n'est pas connecté, renvoie vers la page connexion

    if (!localId) {
        window.location.href= '/connexion';
    };

    // Déclare les variables
    const [isSubscribed, setIsSubscribed] = useState(localStorage.getItem("isSubscribed") === "true");
    const buttonText = isSubscribed ? "Se désabonner" : "S'abonner";
    const buttonColor = isSubscribed ? "blue" : "black";

    // Concerne le bouton "s'abonner"

    const subscribed = () => {
        handleSubscription(localChannelId, localId, isSubscribed ? "unsubscribe" : "subscribe");
    };

    const handleSubscription = async (channelId, localId, act) => {
        try {
            if (act === "subscribe") {
                axios.post('http://localhost:3001/users/getSubs', { channelId, localId});
                setIsSubscribed(true);
                localStorage.setItem("isSubscribed", "true");
            } else if (act === "unsubscribe") {
                axios.post('http://localhost:3001/users/getUnsubs', { channelId, localId});
                setIsSubscribed(false);
                localStorage.setItem("isSubscribed", "false");
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