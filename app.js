
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();


app.engine('html', ejs.__express);
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'static')));


//安全设置，
//禁用x-powered-by 头
//禁止任何frame,iframe,xss protections


module.exports = app;