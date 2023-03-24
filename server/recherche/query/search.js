const { con } = require('../../db/connection')

const app = express();
app.use(express.json());
app.post('/api/data', async (req, res) => {
    try {
      const { users,videos,channels,communaute, pseudo, title,description,name,contenu } = req.body;
      const [results1, results2,results3,results4,results5] = await Promise.all([
        con.query(`SELECT ${pseudo.join(', ')} FROM ${users}`),
        con.query(`SELECT ${title.join(', ')} FROM ${videos}`),
        con.query(`SELECT ${description.join(', ')} FROM ${videos}`),
        con.query(`SELECT ${name.join(', ')} FROM ${channels}`),
        con.query(`SELECT ${contenu.join(', ')} FROM ${communaute}`)
      ]);
      
      const data = [];
      results1[0].forEach((row) => {
        data.push({
          id: row.id,
          name: row.name,
          email: row.email,
          date: null,
          amount: null
        });
      });
      results2[0].forEach((row) => {
        data.push({
          id: row.id,
          name: null,
          email: null,
          date: row.date,
          amount: row.amount
        });
      });
      results3[0].forEach((row) => {
        data.push({
          id: row.id,
          name: null,
          email: null,
          date: row.date,
          amount: row.amount
        });
      });
      results4[0].forEach((row) => {
        data.push({
          id: row.id,
          name: null,
          email: null,
          date: row.date,
          amount: row.amount
        });
      });
      results5[0].forEach((row) => {
        data.push({
          id: row.id,
          name: null,
          email: null,
          date: row.date,
          amount: row.amount
        });
      });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur serveur');
    }
  });
  
  app.listen(5000, () => {
    console.log('Serveur démarré sur le port 5000');
  });
  
