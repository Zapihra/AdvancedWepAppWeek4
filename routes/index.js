var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/recipe/:food', function(req,res) {
  
  const food = req.params.food;
  resText = {"name": food, 
  "instructions": ["list"], 
  "ingredients": ["list2"]}
  res.json(JSON.stringify(resText));
})

module.exports = router;
