const { con } = require('../../db/connection')

module.exports = async (req, res) => {
  const { video_id, user_id } = req.query;

  // Vérifier si l'utilisateur a déjà liké cette vidéo
  const [result] = await con.query2('SELECT * FROM likes_verrif WHERE video_id = ? AND user_id = ?', [video_id, user_id]);

  if (result) {
    return res.json(result).status(200);
  }
  // Mettre à jour le nombre de likes dans la table 'videos'
  // Ajouter une entrée dans la table 'likes' pour enregistrer le like de l'utilisateur
};
