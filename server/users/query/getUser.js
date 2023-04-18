const { con } = require('../../db/connection.js');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

    const Password = req.body.password;

    const result = await con.query2('SELECT * FROM users WHERE users.email = ?', [req.body.email])

    const isMatch = bcrypt.compare(Password, result[0].password);

    if(result.length === 0 || result[0].hashedUserId === "") {
        return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    } else if (isMatch) {
        res.json(result[0].hashedUserId).status(200);
    }
}