var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Medical inventory' });
  res.render('dashboard');
});

router.get('/Login', function(req, res, next){
  res.render('Login');
});

// router.get('/dashboard', function(req, res, next){
//   res.render('dashboard');
// });

module.exports = router;
