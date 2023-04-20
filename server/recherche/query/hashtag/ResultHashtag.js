const { con } = require('../../../db/connection')
import dateACS from "../filtre/dateajout"

module.exports = async (req, res) => {
    result = await con.query2('SELECT videos.*, channels.name, channels.image_link FROM `videos` INNER JOIN `tags_videos` on videos.id = `tags_videos`.id_video INNER JOIN channels ON videos.channel_id = channels.id WHERE `tags_videos`.`id_tag` = ? ORDER BY ' + {filter} + ';', [req.params.id_tag])
    console.log(result)

    res.json(result).status(200)
} 