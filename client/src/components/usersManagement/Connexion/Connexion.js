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
    
    axios.get(`http://localhost:3001/users/getUsers/${formData.email}`)
    .then(response => {
        setUsers(response.data);
    })
    .catch(error => {
        console.log(error);
    });
    
  };

	/* async function getUsers() {
		const response = await fetch('http://localhost:3001/users/getUsers', 
		{
			method: 'GET',
			headers: {'Content-Type': 'application/json'},
		});

		const data = await response.json();
		setUsers(data);
		console.log('data', data);
		}

		getUsers();
  	} */

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

                localStorage.setItem('user_id', JSON.stringify(user.id));

					const user_id = JSON.parse(localStorage.getItem('user_id'));

					console.log('user_id', user_id);

                	//window.location.href = '/home';
            } else {
				alert('L\'email ou le mot de passe est incorrect');
				return;
			}
        });
    }
  };

  return (
    <div className="connexion">
      <h1 className='title'>Connexion</h1>


      <form onSubmit={handleSubmit} className='form'>
       
        
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


/* 
  app.get('/users', function(req, res) {
    con.query('SELECT * FROM users', function(err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
   */
