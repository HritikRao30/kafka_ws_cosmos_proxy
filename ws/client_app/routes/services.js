const express = require('express');
const router = express.Router();

const servicesCtrl = require('../controllers/services-controller');
//validation is looked after by the API gateway

// GET - /api/services (Get All services)
router.get("/", servicesCtrl.index);

module.exports = router;