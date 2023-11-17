var express = require('express');
const multer = require('multer');
var router = express.Router();
const upload = multer({dest:'uploads'})

const record = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/recipe/:food', function(req,res) {

  const food = req.params.food;
  resText = {"name": food, 
  "instructions": ["list"], 
  "ingredients": ["list2"]}
  res.json(resText);
})

router.post('/recipe/', function(req, res) {
  record.push(req.body)
  res.json(req.body)
})

router.post('/images', upload.array("file",5), function(req, res) {
  console.log(req.body)
  res.json({"msg":"hi"})
})

module.exports = router;
