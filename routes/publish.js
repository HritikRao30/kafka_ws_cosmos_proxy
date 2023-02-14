var express = require('express');
var router = express.Router();
var publish_controller = require('../controllers/publish_controller');

/* GET users listing. */
//receive the input fromm other container using api and send data to it using kafka

router.post('/in', publish_controller.reveal);
// router.post('/out', publish_controller.push);

module.exports = router;
