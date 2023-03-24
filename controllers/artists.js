const Artist = require('../models/Artist')

module.exports = {
    new: newArtist,
    create,
    index,
    show,
    delete: destroy
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

function index(req, res){
    Artist.find({})
    .then(function(artists){
        res.render('artists/index', {artists, title: 'All artists'})
    })
    .catch(function(err){
        res.redirect('/')
    })
    
}

function show(req, res){
    let foundArtist
    Artist.findById(req.params.id)
    .then(function(artist){
        res.render('artists/show', {artist, title: artist.name}) 
    })
}

function destroy(req, res){
    console.log('destroying Prince')
    Artist.deleteOne({
        _id: req.params.id
    })
    .then(function(results){
    console.log(results)
    res.redirect('/')
    })
    .catch(function(err){
        console.log(err)
        res.redirect('/')
    })
}