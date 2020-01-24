const Joi = require('joi');
const express = require('express');
const router = express.Router();

const movies = [
    {id: 1, title: 'DDLJ'},
    {id: 2, title: 'Happy new year'},
    {id: 3, title: 'Barfi'},
    {id: 4, title: 'Harry Potter'},
];

router.get('/',(req,res) => {
    res.send(movies);
});

router.get('/:id',(req,res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send('Movie with given ID not found');

    res.send(movie);
});

router.post('/',(req,res) => {
    const { error } = validateMovie(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const movie = {
        id: movies.length + 1,
        title: req.body.title
    };

    movies.push(movie);
    res.send(movie);
});

router.put('/:id',(req,res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send('Movie with given ID not found');

    const { error } = validateMovie(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    movie.title = req.body.title;
    res.send(movie);
});

router.delete('/:id',(req,res) => {
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

module.exports = router;
