import React, { useState, useEffect } from 'react';
import './UserProfile.scss';
import axios from 'axios';
import profilePhoto from './chat.jpg';

function UserProfile() {

    const localId = localStorage.getItem('user_id');

    if (!localId) {

        window.location.href= '/connexion';

    };

    const [users, setUsers] = useState([]);

    const action = () => {

        axios.post('http://localhost:3001/users/getUserBis', {

            id:localId

        }).then(response => {

            setUsers(response.data);
            console.log(response.data);

        }).catch(error => {

            console.log(error);

        });

    };

    useEffect(() => {

        action();

    }, []);

    return (

        <><div className='wrapperUserProfile'>

            <div className='profileUserBis'>

                <img id='pictureUserBis' src={profilePhoto}></img>

            </div>

            <div className='profileUserBis'>

                {users.map(user => (

                    <div key={user.id}>

                        <p className='pseudoUsername'>{user.name}</p>
                        <p>{user.subscribers} abonnés {user.number_videos} vidéos</p>
                        <p>{user.description}</p>

                    </div>

                ))}

            </div>

            <div className='profileUserBis'>

                <button id='updateUserProfile' type='submit'>Personnaliser sa chaîne</button>

            </div>
            
        </div></>

    );

};

export default UserProfile;