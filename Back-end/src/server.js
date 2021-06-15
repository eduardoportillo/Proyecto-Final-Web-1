const express = require('express');

const app = express();

// settings



// middleware
app.use(express.urlencoded({extended: false}));

// Global variables


// Routes
app.get('/', (req,res)=> {
    res.send('hello world');
});

// Static File
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
