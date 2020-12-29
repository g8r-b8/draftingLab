var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const{check, validationResult}=require('express-validator');
var router = express.Router();
const urlencoded = bodyParser.urlencoded({extended:false});
router.use(bodyParser.json());
router.use(urlencoded);
router.use(express.static(__dirname = './public/'));
const cors = require("cors");


//lets define an array to hold our customers and their ID's
let posts = [
    {id:0, title:"jqus3"},
    {id:1, title:"qui4"},
    {id:2, title:"juil5"}
]
//and a global boolean for our middleware (note: this is a trivial implementation of a check one could do. Can and should be built upon)
let done = false;

//custom middleware to add a "-${id}" to their username
var mw =function (req, res, next) { 
    for (i=0; i< posts.length; i++){
        if (done === false){
            console.log(posts[i].title);
            posts[i].title = posts[i].title+"-0"+posts[i].id;
        }
    }
    done=true;
    next();
}

//url to get the posts data
router.get('/api/posts', mw,(req, res, next)=>{

   res.json(posts);

})

//Input title info here (form)
router.get('/home', (req,res, next) => {

    res.sendFile('index.html', { root: __dirname });

});

//post the user input from home to posts
router.post('/api/posts', [
    //Pass in validations
    check("name").not().isEmpty()
], (req,res)=>{    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors:errors.array()
        })
    }
    //else here insures scope of success statement
    else{
        posts.push({
            id : posts.length, 
            title : req.body.name
        });
        res.status(202).json({
            success:'ok'
        })
    }   
});

module.exports = router;
