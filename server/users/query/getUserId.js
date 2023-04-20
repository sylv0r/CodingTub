const { con } = require('../../db/connection.js');

module.exports = async (req, res) => {

    const result = await con.query2('SELECT id FROM users WHERE users.hashedUserId = ?', [req.body.hashedUserId])

    if(result.length === 0) {
        return res.status(400).json({ message: 'USER ID NOT FOUND' });
    }
    
    res.json(result[0].id).status(200);
}

//pour recuperer l'id de l'utilisateur faite un copier coller de ce code dans le fichier de votre choix :D

/* 
    axios.post('http://localhost:3001/users/getUserId', {
		hashedUserId : JSON.parse(localStorage.getItem('hashed_user_id'))
	})
	.then(response => {
		console.log('user Id', response.data);
	})
	.catch(error => {
		console.log('error', error.response.data)
	}); 
*/