module.exports = {
    new: newFlight, 
    index
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: ''});
}

const Flight = require('../models/flight');

async function index(req, res) {
    try {
        const flightsAll = await Flight.find({});
        res.render('flights/index', {flights: flightsAll });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
}