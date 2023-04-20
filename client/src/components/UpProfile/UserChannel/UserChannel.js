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

    const localChannelId = action.idChaine.id;

    console.log(localChannelId)

    // Si on n'est pas connecté, renvoie vers la page connexion

    if (!localId) {
        window.location.href= '/connexion';
    };

    axios.post('http://localhost:3001/users/getIfSubbed', {
        localId,
        localChannelId
    })
    .then(response => {
        if (response.data[0] === 0 || response.data[0] === undefined) {
            document.getElementsByClassName("updateUserProfile")[0].innerHTML = "Subscribe"
        } else {
            document.getElementsByClassName("updateUserProfile")[0].innerHTML = "Unsubscribe"
        }
    })
    .catch(error => {
        console.log(error);
    });

    // Déclare les variables
    const [buttonText, setButtonText] = useState(localStorage.getItem("buttonText") || "S'abonner");
    const [buttonColor, setButtonColor] = useState(localStorage.getItem("buttonColor") || "black");

    // Concerne le bouton "s'abonner"

    const subscribed = () => {
        axios.post('http://localhost:3001/users/getIfSubbed', {
			localId,
			localChannelId
		})
		.then(response => {
			console.log(response.data[0])

            if (response.data[0] === 0 || response.data[0] === undefined) {
                handleSubscription(localChannelId, localId, "subscribe");
                window.location.reload();
            } else {
                handleSubscription(localChannelId, localId, "unsubscribe");
                window.location.reload();
            }
		})
		.catch(error => {
			console.log(error);
		});



        /* if (buttonText === "S'abonner") {
            handleSubscription(localChannelId, localId, "subscribe");
        }
        
        if (buttonText === "") {
            handleSubscription(localChannelId, localId, "unsubscribe");
        } */
    };

    const handleSubscription = async (channelId, localId, act) => {
        try {

            if (act === "subscribe") {
            axios.post('http://localhost:3001/users/getSubs', { channelId, localId});

            } else if (act === "unsubscribe") {
            axios.post('http://localhost:3001/users/getUnsubs', { channelId, localId});
            }

        } catch (error) {
          console.log(error);
        }
    };

    useEffect(() => {
        const checkConnectionAsync = async () => {
          const id = await checkConnection()
        }
        checkConnectionAsync()
    }, [])
 
    // Partie HTML

    if (localId == action.idUserChaine.user_id) {
        return (
            <div className='wrapperUserProfile'>
                <div className='profileUserBis'>
                    <img id='pictureUserBis' src={process.env.REACT_APP_NGINX_LINK + action.imageLink.image_link} alt='profile' />
                </div>
                <div className='profileUserBis'>
                    {/* Récupère les données de la base de données grâce à la requête SQL */}
                    <p className='pseudoUsername'>{action.name}</p>
                    <p>{action.subscribersChannel.subscribers} abonnés {action.nbVideosChannel.number_videos} vidéos</p>
                    <p>{action.descriptionChannel.description_channel}</p>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='wrapperUserProfile'>
                <div className='profileUserBis'>
                    <img id='pictureUserBis' src={process.env.REACT_APP_NGINX_LINK + action.imageLink.image_link} alt='profile' />
                </div>
                <div className='profileUserBis'>
                    {/* Récupère les données de la base de données grâce à la requête SQL */}
                    <p className='pseudoUsername'>{action.name}</p>
                    <p>{action.subscribersChannel.subscribers} abonnés {action.nbVideosChannel.number_videos} vidéos</p>
                    <p>{action.descriptionChannel.description_channel}</p>
                </div>
                <div className='profileUserBis'>
                    <button className='updateUserProfile' type='submit' onClick={subscribed} style={{ backgroundColor: buttonColor }}>
                    </button>
                </div>
            </div>
        );
    }
};