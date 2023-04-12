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

                    <ul key={user.id}>

                        <li>{user.name}</li>
                        <li>{user.description}</li>

                    </ul>

                )) }

            </div>
            
        </div></>

    );

};

export default AffichageProfil;