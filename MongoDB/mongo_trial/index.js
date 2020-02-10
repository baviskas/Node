const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('MongoDB connected...'))
    .catch( err => console.log('Failed to connect to MongoDB.', err));

