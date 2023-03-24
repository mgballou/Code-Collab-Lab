// require models here

module.exports = {
    new: newArtist
}

function newArtist(req, res){
    res.render('artists/new', {title: 'Enter a new artists'})

}