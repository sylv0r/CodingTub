import React, {useState} from 'react';
import './Connexion.css';
import axios from 'axios';
function Connexion() {
    // state (état, donné)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    /* console.log(formData); */

    console.log('formData', formData);

    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [videos, setVideos] = useState([]);

    const getVideos = () => {
        axios.get('http://localhost:3001/videos')
            .then(response => {
                setVideos(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

  return (
    <div className="connexion">
      <h1 className='title'>Connexion</h1>


      <form onSubmit={handleSubmit} className='form'>
       
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
      <button onClick={getVideos}>Afficher les vidéos</button>

      <p>{videos.map(video => (
          <li key={video.id}>{video.title}</li>))}
      </p>
    </div>
  );
}

export default Connexion;
