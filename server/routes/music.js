let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const music = require('../models/music');

//connect with musicModel

let Music = require('../models/music');

/* read operation*/
/* get route for music list*/

router.get('/', (req,res,next)=>{
    Music.find((err, Musiclist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('music/list',{
                title:'music', 
                Musiclist: Musiclist
            })
        }
    })
})

/*add operation*/
/*get route for displaying the add-page -- create operation*/
router.get('/add', (req,res,next)=>{
    res.render('music/add',{title:'Add Song'})
});
/*post route for processing the add page -- part of create operation*/
router.post('/add', (req,res,next)=>{
    let newSong = Music ({
        "Song":req.body.Song,
        "Artist":req.body.Artist,
        "Year":req.body.Year,
        "Genre":req.body.Genre,
        "Rating":req.body.Rating
    })
    Music.create(newSong,(err,Music) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/music/list');
        }
    })
});



/*edit operation*/
/*get route for displaying the edit operation -- update operation*/
router.get('/edit/:id', (req,res,next)=>{
    let id = req.params.id;
    Music.findById(id, (err,musicToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('music/edit', {title:'Edit Song',music:musicToEdit});
        }
    })
});
/*post route for displaying the edit operation -- part of create operation*/
router.post('/edit/:id', (req,res,next)=>{
    let id=req.params.id;
    let updateSong = Music({
        "_id":id,
        "Song":req.body.Song,
        "Artist":req.body.Artist,
        "Year":req.body.Year,
        "Genre":req.body.Genre,
        "Rating":req.body.Rating
    })
    Music.updateOne({_id:id},updateSong,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/music/list');
        }
    })
});


/*delete operation*/
/*get to perform delete operation -- deletion*/
router.get('/delete/:id', (req,res,next)=>{
    let id=req.params.id;
    Music.remove({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/music/list');
        }
    })
});






module.exports=router;