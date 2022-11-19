let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const music = require('../models/music');

//connect with musicModel

let Music = require('../models/music');

/* read operation*/
/* get route for music list*/

router.get('/', (req,res,next)=>{
    Music.find((err, musiclist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('music',{
                title:'music list', 
                Musiclist: musiclist
            })
        }
    })
})
module.exports=router;