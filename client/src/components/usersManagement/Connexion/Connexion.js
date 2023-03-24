import React, {useState} from 'react';
import './Connexion.scss';
import axios from 'axios';

function Connexion() {
    // state (état, donné)
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

  	//const [users, setUsers] = useState([]);

  	const handleSubmit = (event) => {
   	 	event.preventDefault();

		console.log('formData', formData);

		if (formData.email === '' || formData.password === '') {
			alert('Veuillez remplir tous les champs');
			return;
		}
		
		axios.post('http://localhost:3001/users/getUsers', {
			email: formData.email,
			password: formData.password
		})
		.then(response => {
			/* console.log('response', response);
			console.log('response.data', response.data) */
			//setUsers(response.data);
			createSession(response.data);
		})
		.catch(error => {
			console.log(error);
		});
		
  	};

  	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value
		});
  	};

  	const createSession = (data) => {
		//console.log('users', users);

		if(data == 0) {
			//console.log(users)
			alert('Veuillez vérifier vos identifiants');

		} else {
			console.log("connected")

			localStorage.setItem('user_id', JSON.stringify(data[0].id));

			console.log(localStorage.getItem('user_id'));

			//window.location.href = '/home';
		};
	};

  return (
    <div className="UsersConnexion">
      	<h1 className='title'>Connexion</h1>

      	<form onSubmit={handleSubmit} className='UsersConnexionForm'>
       
        
          	<label>E-mail :</label><br />
          	<input type="email" placeholder='Email@gmail.com' name="email" value={formData.email} onChange={handleChange} />
        

        
          	<label>Mot de passe :</label><br />
          	<input type="password" placeholder='Password' name="password" value={formData.password} onChange={handleChange} />
        

        <button className="submit" type="submit">Envoyer</button>

     	</form>
    </div>
  );
}


export default Connexion;
