import express from 'express';
const app = express();

import 'reflect-metadata';

import './database/connect'

import routes from './routes';
app.use(routes); // depois da definição do parser via json.

app.use(express.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, XRequested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    next();
});
app.listen(3000, () => console.log('Server started at http:/localhost: 3000'));
