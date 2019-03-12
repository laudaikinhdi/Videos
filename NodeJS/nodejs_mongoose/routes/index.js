var express = require('express');
var router = express.Router();
var contactModel = require('../models/contact');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/xem', function(req,res){
  contactModel.find({}, function(err, data){
    res.render('xem', {title: "Xem dữ liệu",data:data});
  })
});
router.get('/xoa/:id', function(req, res){
  let id = req.params.id;
  contactModel.findByIdAndRemove(id).exec();
  res.redirect('/xem');
});
router.get('/sua/:id', function (req, res) { 
  let id = req.params.id;
  contactModel.findById(id, function(err, data){
    res.render('sua',{title: "Sữa dữ liệu", nguoidung:data})
  });
});
router.post('/capnhat/:id', function(req, res){
  let id = req.params.id;
  let ten = req.body.ten;
  let tuoi = req.body.tuoi;
  contactModel.findByIdAndUpdate(id,{ten:ten,tuoi: tuoi},function(err, data){
      res.redirect('/xem');
  });
});
router.get('/them', function(req, res){
  res.render('them',{title:"Thêm dữ liệu"});
});
router.post('/them', function(req,res){
  let ten = req.body.ten;
  let tuoi = req.body.tuoi;
  let ojb = {
    ten: ten,
    tuoi: tuoi
  }
  const contact = new contactModel(ojb);
  contact.save();
  res.redirect('/xem');
});

module.exports = router;
