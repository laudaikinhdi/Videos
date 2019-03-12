var express = require('express');
var multer  = require('multer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + '-' + file.originalname);
  }
})

var upload = multer({ storage: storage })
router.post('/upload', upload.any() ,function(req, res, next) {
  console.log(req.files);
  res.status(200).send(req.files);
});
module.exports = router;
