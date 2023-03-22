import React, { useState, useEffect } from 'react';
import './Affichage.css';
import axios from 'axios';

function Affichage() {

    const [users, setUsers] = useState([]);

    const action = () => {

        axios.get('http://localhost:3001/users').then(response => {

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

                <h1>Users</h1>

                {users.map(user => (

                    <ul key={user.id}>

                        <li>{user.nom}</li>
                        <li>{user.prenom}</li>
                        <li>{user.pseudo}</li>
                        <li>{user.email}</li>

                    </ul>

                ))}

            </div>
        
        </div></>

    );

};

export default Affichage;