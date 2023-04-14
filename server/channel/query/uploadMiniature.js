const fs = require('fs')
const axios = require('axios')
const path = require('path');

module.exports = async (req, res) => {
  try {
    const imagePath = path.join(__dirname, '../uploads', req.file.filename);
    const fileStream = fs.createReadStream(imagePath);
    const url = 'https://8a19-80-70-44-4.ngrok-free.app/miniatures/' + req.file.filename; // Remplacez par l'URL de votre serveur Nginx

    const axiosResponse = await axios.put(url, fileStream, {
      headers: {
        'Content-Type': req.file.mimetype,
      },
    });

    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
      }
    });

    res.status(200).json({ message: 'Image uploaded successfully', url });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error uploading image', error });
  }
}