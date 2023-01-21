const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ["DFW", "JFK", "LAX", "ORD", "PDX"],
    },
    arrival: Date,
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ["Alaska", "Delta", "Frontier", "Southwest", "Spirit"],
    },
    airport: {
        type: String,
        enum: ["DFW", "JFK", "LAX", "ORD", "PDX"],
    },
    flightNumber: {
        type: Number,
        min: [10, ""],
        max: [9999, ""],
    },
    dateOfDeparture: {
        type: Date,
    },
    destinations: [destinationSchema],

}, {
    timestamps: true
});

module.exports = mongoose.model("Flight", flightSchema)
