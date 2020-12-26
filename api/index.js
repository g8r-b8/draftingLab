const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const{check, validationResult}=require('express-validator');
const { response } = require('express');
var controller = require('./public/js/controller.js');
var cors = require("cors");
// ...


const app = express();
const port = 3001;

app.use(cors())
app.use('/', controller);





app.listen(port, ()=> {
 
    console.log(`Listening on port ${port}...`);
     
});
