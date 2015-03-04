var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Introduction to Websockets', p: 'Let\'s do this.' });
});

module.exports = router;
