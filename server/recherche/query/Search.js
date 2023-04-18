const { con } = require('../../db/connection')

module.exports = async (req, res) => {
    try {
        const { users, videos, channels, communaute, pseudo, title, description, name, contenu } = req.body;
        const [results1, results2, results3, results4] = await Promise.all([
            con.query(`SELECT ${pseudo.join(', ')} FROM ${users}`),
            con.query(`SELECT ${title.join(', ')} FROM ${videos}`),
            con.query(`SELECT ${description.join(', ')} FROM ${videos}`),
            con.query(`SELECT ${name.join(', ')} FROM ${channels}`),
            con.query(`SELECT ${contenu.join(', ')} FROM ${communaute}`)
        ]);

        const data = [];
        results1[0].forEach((row) => {
            keyValueList.push({
                id: row.id,
                type: 'user',
                pseudo: row.pseudo,
            });
            console.log(results1);
        });

        results2[0].forEach((row) => {
            keyValueList.push({
                id: row.id,
                type: 'video',
                title: row.title,
                description: row.description,
                channel_id: row.channel_id,
            });
        });

        results3[0].forEach((row) => {
            keyValueList.push({
                id: row.id,
                type: 'channel',
                name: row.name,
                description: row.description,
            });
        });

        results4[0].forEach((row) => {
            keyValueList.push({
                id: row.id,
                type: 'communaute',
                id_user: row.id_user,
                content: row.content,
            });
        });

        res.json(keyValueList);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
}