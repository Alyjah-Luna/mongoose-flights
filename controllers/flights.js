const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        console.log(flights)
        res.render('flights/index', { flights })
    })
};
function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            console.log(tickets, 'This is ticket')
            res.render('flights/show', { flight, tickets });
        });
    })
};

function newFlight(req, res) {
    res.render('flights/new')
};

function create(req, res) {
    const flight = new Flight(req.body);
        flight.save(function (err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
};