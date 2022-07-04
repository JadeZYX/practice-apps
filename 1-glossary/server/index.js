require("dotenv").config();
const express = require("express");
const path = require("path");
var router = require('./router.js');
//const morgan = require('morgan');//???
//middleware
//var cors = require('cors');
const bodyParser = require('body-parser');
// Json parser and JSON strigify??
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(cors());
//app.use(morgan('dev'));
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use('/api',router);


let port = process.env.PORT || 8000;
app.listen(port);
console.log(`Listening at http://localhost:${port}`);
