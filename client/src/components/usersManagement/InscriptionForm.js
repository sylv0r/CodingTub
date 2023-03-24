import React, { useState } from 'react';
import './InscriptionForm.css';
import axios from 'axios';



function Inscription() {
    // state (état, donné)
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    pseudo: '',
    email: '',
    password: '',
    cpassword:''
  });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
      
        if (formData.nom === '' || formData.prenom === '' || formData.prenom === '' || formData.email === '' || formData.password === '' || formData.cpassword === '') {
            alert('Veuillez remplir tous les champs')
            return;
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

axios(options)
  .then(response => {
    console.log(response.status);
  });

    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  return (
      <form onSubmit={handleSubmit}>
          <div className='container-profile'>
              <div className='grid-profil'>
                  
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
                      <input type="password" name="password" value={formData.password} onChange={handleChange} />
                  </div>

                  <div className='form-group'>
                      <label>Confirmez le mot de passe :</label>
                      <input type="password" name="cpassword" value={formData.cpassword} onChange={handleChange} />
                  </div>

                  <button className='button-container-profile' type='submit'>Envoyer</button>

                </div>
          </div>
        </form>
        
  );
}
export default Inscription;