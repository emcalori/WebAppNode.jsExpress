const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan'); // morgan gives information about the page
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('tiny')); // tiny sets the amount of data returned
app.use(express.static(path.join(__dirname, '/public/'))); //sets up middle wear to deal with static files i.e. the index html file

app.get('/', (req, res) => {
    res.send('Hello from my app'); // not run when static page is defined
});

app.listen(PORT, () => {
    debug(`Listening to ${chalk.green(PORT)}`);
});