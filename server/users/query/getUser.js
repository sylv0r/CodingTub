const { con } = require('../../db/connection.js');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    try{

        const result = await con.query2('SELECT * FROM users WHERE users.email = ? AND users.password = ?', [req.body.email, req.body.password])
        console.log('result', result);

        if (result.length === 0) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
        }

        res.json(result[0].id).status(200)

        /* const isPassCorrect = bcrypt.compare(req.body.password, result[0].password);

        if (!isPassCorrect) {
            res.json(result[0].id).status(200)
        } else {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
        } */
    
    }catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Erreur serveur'});
    }
}