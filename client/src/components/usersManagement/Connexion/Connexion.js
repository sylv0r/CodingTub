import React, {useState,useEffect} from 'react';
import './Connexion.scss';
import axios from 'axios';
function Connexion() {
    // state (état, donné)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('formData', formData);

    if (formData.email === '' || formData.password === '') {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    axios.get('http://localhost:3001/users')
    .then(response => {
        setUsers(response.data);
        //console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
    
  };

  useEffect(() => {
    createSession();
  }, [users]);

  	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value
		});
  	};

  	const createSession = () => {
    console.log('users', users);

    if (users.length > 0) {
        users.forEach(user => {
            if (user.email === formData.email && user.password === formData.password) {
                console.log('user', user);

                localStorage.setItem('user', JSON.stringify(user.id));

					const user_id = JSON.parse(localStorage.getItem('user'));

					console.log('user_id', user_id);

                //window.location.href = '/home';
                //console.log(JSON.parse(localStorage.getItem('user')));
            }
        });
    }
  }

/*   const [users, setUsers] = useState([]);
 */
/*   const getUsers = () => {
      axios.get('http://localhost:3001/users')
          .then(response => {
              setUsers(response.data);
              console.log(response.data);
          })
          .catch(error => {
              console.log(error);
          });
  } */

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

        <button className="submit" type="submit">Envoyer</button>

      </form>
      {/* <button onClick={getUsers}>Afficher les vidéos</button>

      <p>{users.map(user => (
          <li key={user.id}>{user.title}</li>))}
      </p> */}
    </div>
  );
}

export default Connexion;
