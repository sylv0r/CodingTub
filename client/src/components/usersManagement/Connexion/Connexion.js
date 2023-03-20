import React, {useState} from 'react';
import './Connexion.css';

function Connexion() {
    // state (état, donné)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    /* console.log(formData); */


  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
      <form onSubmit={handleSubmit}>
       
        <div>
          <label>E-mail :</label><br />
          <input type="email" placeholder='Email@gmail.com' name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label>Mot de passe :</label><br />
          <input type="password" placeholder='Password' name="password" value={formData.password} onChange={handleChange} />
        </div>

        <button className="" type="submit">Envoyer</button>

    </form>
  );
}

export default Connexion;
