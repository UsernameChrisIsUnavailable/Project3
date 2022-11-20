let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const music = require('../../models/music');

//connect with musicModel

let Music = require('../../models/music');

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
                title:'music', 
                Musiclist: musiclist
            })
        }
    })
})

/*add operation*/
/*get route for displaying the add-page -- create operation*/
router.get('/add', (req,res,next)=>{

});
/*post route for processing the add page -- part of create operation*/
router.post('/add', (req,res,next)=>{

});



/*edit operation*/
/*get route for displaying the edit operation -- update operation*/
router.get('/edit', (req,res,next)=>{

});
/*post route for displaying the edit operation -- part of create operation*/
router.post('/edit', (req,res,next)=>{

});


/*delete operation*/
/*get to perform delete operation -- deletion*/
router.get('/add', (req,res,next)=>{

});






module.exports=router;