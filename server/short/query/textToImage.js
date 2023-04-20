const sharp = require("sharp");

async function createCaption(text, xPos, yPos) {
  return new Promise(async (resolve, reject) => {
    const imgBuffer = await sharp({
      create: {
        width: 380,
        height: 750,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite([
        {
          input: Buffer.from(`<svg width="380" height="750">
            <text x="${xPos}" y="${yPos}" font-size="30" font-family="Arial" fill="white">${text}</text>
          </svg>`),
        },
      ])
      .png()
      .toBuffer();

    const imgPath = path.join(__dirname, "../uploads", "text-" + Date.now() + ".png");

    fs.writeFile(imgPath, imgBuffer, (err) => {
      if (err) {
        console.error("Error creating text image:", err);
        reject(err);
      } else {
        resolve(imgPath);
      }
    });
  });
}

module.exports.createCaption = createCaption;
