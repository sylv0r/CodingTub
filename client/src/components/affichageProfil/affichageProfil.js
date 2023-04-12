import React, { useState, useEffect } from 'react';
import './affichageProfil.scss';
import axios from 'axios';

function AffichageProfil() {

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

        <><header className='barUp'></header>

        <div className='wrapper'>

            <div className='barLeft'></div>

            <div className='user'>

                {users.map(user => (

                    <div key={user.id}>

                        <p className='pseudo'>{user.name}</p>
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

export default AffichageProfil;