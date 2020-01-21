const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

const movies = [
    {id: 1, title: 'DDLJ'},
    {id: 2, title: 'Happy new year'},
    {id: 3, title: 'Barfi'},
    {id: 4, title: 'Harry Potter'},
];

app.get('/',(req,res) => {
    res.send('Movies Services');
});

app.get('/api/movies',(req,res) => {
    res.send(movies);
});

app.get('/api/movies/:id',(req,res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send('Movie with given ID not found');

    res.send(movie);
});

app.post('/api/movies',(req,res) => {
    const { error } = validateMovie(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const movie = {
      id: movies.length + 1,
      title: req.body.title
    };

    movies.push(movie);
    res.send(movie);
});

app.put('/api/movies/:id',(req,res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send('Movie with given ID not found');

    const { error } = validateMovie(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    movie.title = req.body.title;
    res.send(movie);
});

app.delete('/api/movies/:id',(req,res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send('Movie with given ID not found');

    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    res.send(movie);
});

function validateMovie(movie) {
    const schema = {
        title: Joi.string().min(3).required()
    };

    return Joi.validate(movie, schema);
}

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}`));
