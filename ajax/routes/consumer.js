var express = require('express');
var router = express.Router();
var kafka_consumer = require('../controllers/kafka_consumer');

router.post('/get_data', kafka_consumer.get_data);
module.exports = router;