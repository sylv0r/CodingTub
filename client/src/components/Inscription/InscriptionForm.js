import React, { useState } from 'react';
import './InscriptionForm.scss';
import axios from 'axios';
import logo from './codingTub.png'

let vision1 = false;


function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

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

const [passwordError ,setPasswordError] = useState(false);

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData);

  if (formData.nom === '' || formData.prenom === '' || formData.prenom === '' || formData.email === '' || formData.password === '' || formData.cpassword === '') {
    alert('Veuillez remplir tous les champs')
    return;
  }

  if (formData.password !== formData.cpassword) {
    alert('Les mots de passe doivent être identiques');
    return;
  }
  
  if (!validatePassword(formData.password)) {
    setPasswordError(true);
    return;
  }

  axios(options)
    .then(response => {
        console.log(response.status);
    })
    .catch(error => {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error :', error.message);
        }
    });
  
  window.location.href = '/connexion';
};

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value
  });

  if (name === 'password') {
    setPasswordError(!validatePassword(value));
  }
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
      document.getElementById('showPassBtnInscription').innerHTML = '<i className="fa-regular fa-eye-slash"></i>';
      vision1 = true;
      
      } else {
			document.getElementById('PassInput1').type = 'password';
			document.getElementById('showPassBtnInscription').innerHTML = '<i className="fa-regular fa-eye"></i>';
			vision1 = false;
    }
  }


  const showPass2 = (event) => {
    event.preventDefault();

    if (vision1 === false) {
      document.getElementById('PassInput2').type = 'text';
      document.getElementById('showPassBtnInscription').innerHTML = '<i className="fa-regular fa-eye-slash"></i>';
      vision1 = true;
      
      } else {
			document.getElementById('PassInput2').type = 'password';
			document.getElementById('showPassBtnInscription').innerHTML = '<i className="fa-regular fa-eye"></i>';
			vision1 = false;
    }
  }


  return (
      <form onSubmit={handleSubmit}>
        <div className='container-profile-inscription'>
        
          <img src={logo} id='codingLogoInscription' alt='logo' />
			<h2>Inscription</h2>
              <div className='grid-profil-inscription'>
                  
                  <div className='form-group a'>
                        <label>Nom :</label>
                        <input type="text" placeholder='Votre Nom' name="nom" value={formData.nom} onChange={handleChange} />
                  </div>

                  <div className='form-group b'>
                      <label>Prénom :</label>
                      <input type="text" placeholder='Votre Prénom' name="prenom" value={formData.prenom} onChange={handleChange} />
                  </div>
                  
                  <div className='form-group c'>
                      <label>Pseudo :</label>
                      <input type="text" placeholder='Votre Pseudo' name="pseudo" value={formData.pseudo} onChange={handleChange} />
                  </div>

                  

                  <div className='form-group'>
                      <label>E-mail :</label>
                      <input type="email" placeholder='email' name="email" value={formData.email} onChange={handleChange} />
                  </div>

                  <div className='form-group'>
                      <label>Mot de passe :</label>
                      <input type="password" id='PassInput1' name="password" value={formData.password} onChange={handleChange} />
                      <button onClick={showPass1} id='showPassBtnInscription'><i className="fa-regular fa-eye"></i></button>
                  </div>

                  <div className='form-group'>
                      <label>Confirmez le mot de passe :</label>
                      <input type="password" id='PassInput2' name="cpassword" value={formData.cpassword} onChange={handleChange} />
                      <button onClick={showPass2} id='showPassBtnInscription'><i className="fa-regular fa-eye"></i></button>
                  </div>
                  
                  <p id='errorConnexion'></p>

                  <button className='button-container-profile' type='submit'>Envoyer</button>

                </div>
            </div>
    </form>
    

  );
}
export default Inscription;