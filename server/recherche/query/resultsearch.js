const{ con } = require('../../db/connection')

module.exports = async (err, resvideo, reschaine) => {

    if(resvideo){
        const video = await con.query('SELECT title FROM videos Like %string%');
        results.forEach(result => {
            console.log(video)
        })
        resvideo.json(video);
        console.log(video)  
    }
        
    

    if(reschaine){
        const chaine = await con.query('SELECT name FROM chaine Like %string%');
        results.forEach(result => {
            
        })  
    }
    reschaine.json(chaine);  
}