const express = require('express'),
      path = require('path'),
      morgan = require('morgan');

const cors = require('cors');

const app = express();

// settings
app.use(cors());
app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('../routes/index.routes'));

app.listen(3000);
console.log('Server on port', 3000);