import React, { useState } from 'react';
import './InscriptionForm.scss';
import axios from 'axios';
import logo from './codingTub.png'

let vision1 = false;


function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

const createErrorInscription = (message) => {

  document.getElementById('errorInscription').innerHTML = message;

  document.getElementById('errorInscription').animate([
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

function Inscription() {
    // state (état, donné)
  const [formData, setFormData] = useState({
  nom: '',
  prenom: '',
  pseudo: '',
  email: '',
  password: '',
  cpassword: ''
});

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData);

  if (formData.nom === '' || formData.prenom === '' || formData.prenom === '' || formData.email === '' || formData.password === '' || formData.cpassword === '') {
    createErrorInscription('Veuillez remplir tous les champs');
    return;
  }

  if (formData.password !== formData.cpassword) {
    createErrorInscription('Les mots de passe doivent être identiques');
    return;
  }

  if (!validatePassword(formData.password)) {
    createErrorInscription('Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial');
    return;
  }

  axios(options)
    .then(response => {
        console.log(response);

        localStorage.setItem('user_id', JSON.stringify(response.data.userId));

        window.location.href = '/';
    })
    .catch(error => {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return;
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            return;
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error :', error.message);
            return;
        }
    });
};

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

const options = {
  url: 'http://localhost:3001/users/createinscription',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  data: {
    nom: formData.nom,
    prenom: formData.prenom,
    pseudo: formData.pseudo,
    email: formData.email,
    password: formData.password,
    cpassword: formData.cpassword
  }
  };
  
	const showPass1 = (event) => {
    event.preventDefault();

    if (vision1 === false) {
      document.getElementById('PassInput1').type = 'text';
      document.getElementById('showPassBtnInscription').innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
      vision1 = true;
      
      } else {
			document.getElementById('PassInput1').type = 'password';
			document.getElementById('showPassBtnInscription').innerHTML = '<i class="fa-regular fa-eye"></i>';
			vision1 = false;
    }
  }


  const showPass2 = (event) => {
    event.preventDefault();

    if (vision1 === false) {
      document.getElementById('PassInput2').type = 'text';
      document.getElementById('showPassBtnInscription2').innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
      vision1 = true;
      
      } else {
			document.getElementById('PassInput2').type = 'password';
			document.getElementById('showPassBtnInscription2').innerHTML = '<i class="fa-regular fa-eye"></i>';
			vision1 = false;
    }
  }


  return (
    <div className='pageInscriptionSize'>
        <form onSubmit={handleSubmit}>
            <div className='container-profile-inscription'>
        
                <img src={logo} id='codingLogoInscription' alt='logo' />
			          <h2>Inscription</h2>
                <div className='grid-profil-inscription'>
                  
                  <div className='form-group a'>
                        <label className='inscriptionLabel'>Nom :</label>
                        <input className='inputInscriptionSize' type="text" placeholder='Votre Nom' name="nom" value={formData.nom} onChange={handleChange} />
                  </div>

                  <div className='form-group b'>
                      <label className='inscriptionLabel'>Prénom :</label>
                      <input className='inputInscriptionSize' type="text" placeholder='Votre Prénom' name="prenom" value={formData.prenom} onChange={handleChange} />
                  </div>
                  
                  <div className='form-group c'>
                      <label className='inscriptionLabel'>Pseudo :</label>
                      <input className='inputInscriptionSize' type="text" placeholder='Votre Pseudo' name="pseudo" value={formData.pseudo} onChange={handleChange} />
                  </div>

                  

                  <div className='form-group'>
                      <label className='inscriptionLabel'>E-mail :</label>
                      <input className='inputInscriptionSize' type="email" placeholder='email' name="email" value={formData.email} onChange={handleChange} />
                  </div>

                  <div className='form-group'>
                      <label className='inscriptionLabel'>Mot de passe :</label>
                      <input className='inputInscriptionSize' type="password" placeholder='password' id='PassInput1' name="password" value={formData.password} onChange={handleChange} />
                      <button onClick={showPass1} id='showPassBtnInscription'><i class="fa-regular fa-eye"></i></button>
                  </div>

                  <div className='form-group'>
                      <label className='inscriptionLabel'>Confirmez le mot de passe :</label>
                      <input className='inputInscriptionSize' type="password" placeholder='confirm password' id='PassInput2' name="cpassword" value={formData.cpassword} onChange={handleChange} />
                      <button onClick={showPass2} id='showPassBtnInscription2'><i class="fa-regular fa-eye"></i></button>
                  </div>
                  
                  <p id='errorInscription'></p>

                  <button className='button-container-profile' type='submit'>Envoyer</button>

                </div>
            </div>
        </form>

        <a href="/connexion" className='linkToConnexion'>Déja inscrit ?</a>

    </div>
  );
}
export default Inscription;