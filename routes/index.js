var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  let msg = "Hello world from the index page!!!";
  res.status(200).send({
    success: true,
    data: msg,
    error: null
  })
});


module.exports = router;
