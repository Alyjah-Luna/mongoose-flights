// const { MongoDriverError } = require('mongodb')
const Flight = require('../models/flights')

module.exports = {
    new: newFlight,
    index,
    create,
}

function newFlight(req, res) {
    res.render('flights/new')
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(flights)
        if(!err) res.render('flights/index', { flights })
        res.redirect('/')
    })
}

function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) console.log(err)
        if (err) return res.redirect('/flights/new')
        console.log(flight)
        res.redirect('/flights')
    })
}