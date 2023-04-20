import React, {useState} from 'react';
import './Connexion.css';
import axios from 'axios';

function Connexion() {

	let vision = false;

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

  	const handleSubmit = (event) => {
   	 	event.preventDefault();

		if (formData.email === '' || formData.password === '') {
			document.getElementById('errorConnexion').innerHTML = 'Email ou mot de passe pas rempli';

			document.getElementById('errorConnexion').animate([
				{ transform: 'translateX(0px)' },
				{ transform: 'translateX(10px)' },
				{ transform: 'translateX(-10px)' },
				{ transform: 'translateX(0px)' },
				{ transform: 'translateX(5px)' },
				{ transform: 'translateX(0px)' }
			], {
				duration: 400,
				iterations: 1
			});

			return;
		}

		axios.post('http://localhost:3001/users/getUsers', {
			email: formData.email,
			password: formData.password
		})
		.then(response => {
			createSession(response.data);
		})
		.catch(error => {
			console.log('error', error.response.data)
			createError(error.response.data);
		});
		
  	};

  	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value
		});
  	};

	const createError = (data) => {

		document.getElementById('errorConnexion').innerHTML = data.message;

		document.getElementById('errorConnexion').animate([
			{ transform: 'translateX(0px)' },
			{ transform: 'translateX(10px)' },
			{ transform: 'translateX(-10px)' },
			{ transform: 'translateX(0px)' },
			{ transform: 'translateX(5px)' },
			{ transform: 'translateX(0px)' }
		], {
			duration: 400,
			iterations: 1
		});

	};

		const createSession = (data) => {

		if (localStorage.getItem('jwt') !== null) {
			localStorage.removeItem('jwt');
		}
		localStorage.setItem('jwt', data.token);

		window.location.href = '/';
	};

	const showPass = (event) => {
		event.preventDefault();

		if (vision === false) {
			document.getElementById('PassInputConnexion').type = 'text';
			document.getElementById('showPassBtnConnexion').innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
			vision = true;

		} else {
			document.getElementById('PassInputConnexion').type = 'password';
			document.getElementById('showPassBtnConnexion').innerHTML = '<i class="fa-regular fa-eye"></i>';
			vision = false;
		}
	}

  return (
    <div className="UsersConnexion">

		<a href="/" className='linkCodingLogoConnexion'><img src={"https://149a-80-70-44-4.ngrok-free.app/logo/logo_codingtub.png"} id='codingLogoConnexion' alt='logo'/></a>

      	<h1>Connexion</h1>

      	<form onSubmit={handleSubmit} className='UsersConnexionForm'>
			
          	<label>E-mail :</label>
          	<input type="email" className='inputSizeConnexion' placeholder='Email@gmail.com' name="email" value={formData.email} onChange={handleChange} />
        
          	<label>Mot de passe :</label>
			<div id='formP2Connexion'>
				<input type="password" id='PassInputConnexion' className='inputSizeConnexion' placeholder='Password' name="password" value={formData.password} onChange={handleChange} />
				<button onClick={showPass} id='showPassBtnConnexion'><i class="fa-regular fa-eye"></i></button>
			</div>

			<p id='errorConnexion'></p>

        	<button className="submitConnexion" type="submit">Envoyer</button>

     	</form>

		<div>
			<a href='/Inscription' id='connexionVersInsc'>Pas encore inscrit ?</a>
		</div>
    </div>
  );
}


export default Connexion;