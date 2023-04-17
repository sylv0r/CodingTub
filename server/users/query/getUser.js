const { con } = require('../../db/connection.js');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

    //const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const Password = req.body.password;
    //console.log('hashedPassword', hashedPassword)

    const result = await con.query2('SELECT * FROM users WHERE users.email = ?', [req.body.email])
    console.log('result', result);

    /* if (result.length === 0) {
        return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }

    res.json(result[0].id).status(200) */

    const isMatch = bcrypt.compare(Password, result[0].password);

    if(result.length === 0) {
        return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    } else if (isMatch) {
        res.json(result[0].id).status(200);
    }
}