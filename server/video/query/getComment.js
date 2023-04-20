const { con } = require('../../db/connection')


    
module.exports = async (req, res) => {
<<<<<<< HEAD
  result = await con.query2('SELECT comment.id, comment.comment, users.pseudo FROM comment INNER JOIN users ON comment.id_user = users.id WHERE comment.id_video = ?;',[req.params.id_video])

=======
  result = await con.query2('SELECT comment.id, comment.comment, comment.datetime_comment, users.pseudo FROM comment INNER JOIN users ON comment.id_user = users.id WHERE comment.id_video = ?;',[req.params.id_video])
>>>>>>> origin/pre_main
  res.json(result).status(200)
}