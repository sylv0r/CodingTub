import React, { useState, useEffect } from 'react';
import './Profile.scss';
import axios from 'axios';

function Profile() {

    const [users, setUsers] = useState([]);

    const action = () => {

        axios.post('http://localhost:3001/users/getUserBis', {
            id:23
        })
        .then(response => {

            setUsers(response.data);
            console.log(response.data);

        } ).catch(error => {

            console.log(error);

        } );

    };

    useEffect(() => {

        action();

    }, []);

    return (

        <><div className='wrapper'>

            <div className='user'>

                <img id='profile' src='chat.jpg' alt="Image d'un mignon chat"></img>

            </div>

            <div className='user'>

                {users.map(user => (

                    <div key={user.id}>

                        <p className='pseudo'>{user.name}</p>
                        <p>{user.subscribers} abonnés {user.number_videos} vidéos</p>
                        <p>{user.description}</p>

                    </div>

                )) }

            </div>

            <div className='user'>

                <button id='subscribe' type='submit'>S'abonner</button>

            </div>
            
        </div></>

    );

};

export default Profile;