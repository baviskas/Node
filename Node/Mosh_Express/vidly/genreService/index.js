const express = require('express');
const app = express();
const genres = require('../routes/genres');

app.use(express.json());
app.use('/api/genres', genres);

app.get('/',(req, res) => {
   res.send('Genre service') ;
});

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}`));
