const { con } = require('../../db/connection')





/* module.exports = async (req, res) => {
  const {id} = req.body
  await con.query2('UPDATE videos SET likes = likes + 1 WHERE id =?', [id]);
  res.sendStatus(200)



} */

module.exports = async (req, res) => {
  const { video_id, user_id } = req.body;

  // Vérifier si l'utilisateur a déjà liké cette vidéo
  const [result] = await con.query2('SELECT * FROM likes_verrif WHERE video_id = ? AND user_id = ?', [video_id, user_id]);

  if (result) {
    return res.status(400).send('L\'utilisateur a déjà liké cette vidéo');
  }

  // Mettre à jour le nombre de likes dans la table 'videos'
  await con.query2('UPDATE videos SET likes = likes + 1 WHERE id = ?', [video_id]);

  // Ajouter une entrée dans la table 'likes' pour enregistrer le like de l'utilisateur
  await con.query2('INSERT INTO likes_verrif SET ?', {video_id, user_id });

  res.sendStatus(200);
};
