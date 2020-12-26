var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const{check, validationResult}=require('express-validator');
var router = express.Router();
//var mw = require('./middleware.js')

const urlencoded = bodyParser.urlencoded({extended:false});

router.use(bodyParser.json());
router.use(urlencoded);
router.use(express.static(__dirname = './public/'));
const cors = require("cors");

//router.use(mw.middleware1)

var dateTime= function (req, res, next) { 
    req.body.date = new Date(); 
    
    next() ;
}

router.use(dateTime);

router.get('/date', dateTime, (req,res,next)=>{

    res.send("Today's date is: "+req.body.date);


})

router.get('/api/posts', (req, res, next)=>{

    const customers = [
        {id:1, title:"jqus3"},
        {id:2, title:"qui4"},
        {id:3, title:"juil5"}
    ]

    res.json(customers);
})

router.get('/home', (req,res, next) => {

    res.sendFile('index.html', { root: __dirname });
    
    //next();
});

router.get('/customers', (req,res, next) => {

    res.sendFile('customers.html', { root: __dirname });
    
    //next();
});





router.post('/formData', [
    //pass in validations
    check("name").not().isEmpty()
],(req,res)=>{

    // gonna do our validation so comment out..
    
    //req.body.name = mw.middleware1();
    console.log("working... "+req.body.name);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors:errors.array()
        })
    }
    res.status(202).json({
        success:'ok'
        
    })
    
});

module.exports = router;
