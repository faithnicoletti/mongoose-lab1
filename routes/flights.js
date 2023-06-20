var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
const flightsCtrl = require('../controllers/flights');

router.get('/new', flightsCtrl.new);
router.get('/', flightsCtrl.index);
module.exports = router;