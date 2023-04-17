import React, { useState, useEffect } from 'react';
import './Profile.scss';
import axios from 'axios';
import profilePhoto from './chat.jpg';

export default function Profile({ action }) {

    const localId = localStorage.getItem('user_id');

    if (!localId){
        window.location.href= '/connexion';
    }

    const [users, setUsers] = useState([]);

    const getProfile = async () => {

        await fetch(`http://localhost:3001/users/${action}`, {method:"GET", headers: { "Content-Type": "application/json"}})
        .then(response => {
            return response.json()
        })
        .then((json) => {
            console.log(json)
            setUsers(json)
        })
        .catch(error => {

            console.log(error);

        });

    };

    useEffect(() => {

        getProfile()

    }, []);

    return (

        <><div className='wrapperProfile'>

            <div className='profileUser'>

                <img id='pictureUser' src={profilePhoto} alt="Image d'un mignon chat"></img>

            </div>

            <div className='profileUser'>

                {users.map(user => (

                    <div key={user.id}>

                        <p className='pseudoUsername'>{user.name}</p>
                        <p>{user.subscribers} abonnés {user.number_videos} vidéos</p>
                        <p>{user.description}</p>

                    </div>

                )) }

            </div>

            <div className='profileUser'>

                <button id='subscribeButton' type='submit'>S'abonner</button>

            </div>
            
        </div></>

    );

};