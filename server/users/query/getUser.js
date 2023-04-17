const { con } = require('../../db/connection.js');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    

    /* const hashedPassword = await bcrypt.hash(req.body.password, 10); */
    const hashedPassword = req.body.password;

    const result = await con.query2('SELECT * FROM users WHERE users.email = ? AND users.password = ?', [req.body.email, hashedPassword])
    console.log('result', result);

    /* if (result.length === 0) {
        return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }

    res.json(result[0].id).status(200) */

    if(result.length === 0) {
        return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    } else {
        res.json(result[0].id).status(200);
    }
}