const Artist = require('../models/Artist')

module.exports = {
    new: newArtist,
    create
}

function newArtist(req, res){
    res.render('artists/new', {title: 'Enter a new artists'})

}

function create(req, res) {
    console.log(req.body)
    // after creating the new artist, we would redirect to the page to create a new artist
    Artist.create(req.body)
    .then(function(newArtist){
        console.log(newArtist)
        res.redirect('/')
    })
    .catch(function(err){
        console.log(err)
    })

}