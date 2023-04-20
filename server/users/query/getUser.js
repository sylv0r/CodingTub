const { con } = require('../../db/connection.js');
const bcrypt = require('bcrypt');
const { sign } = require("jsonwebtoken");
const { password } = require('../../db/initDb.js');
require('dotenv').config()

module.exports = async (req, res) => {

    const Password = req.body.password;

    const result = await con.query2('SELECT * FROM users WHERE users.email = ?', [req.body.email])

    if(result.length === 0) {
        return res.status(400).json({ message: 'Email existe pas dans notre serveur' });
    }

    const isMatch = await bcrypt.compare(Password, result[0].password);

    console.log(isMatch)

    console.log(Password)
    console.log(result[0].password)
    console.log('result for user data', result)

    if(!isMatch){
        return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }
    
    if (isMatch) {
        const userId = result[0].id;
        const token = sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.status(200).json({token});
    }
}