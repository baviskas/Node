const express = require('express');
const app = express();
const movies = require('../routes/movies');

app.use(express.json());
app.use('/api/movies', movies);

app.get('/',(req,res) => {
    res.send('Movies Services');
});

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}`));
