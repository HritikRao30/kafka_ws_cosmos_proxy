var express = require('express');
var router = express.Router();
var kafka_controller = require('../controllers/kafka_controller');

router.post('/create_topic', kafka_controller.create_topic);
router.post('/send_data', kafka_controller.send_data);

module.exports = router;