var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'node_postgre',
  password: 'thanhtan',
  port: 5432,
})

/* GET home page. */
router.get('/xem', function(req, res, next) {
  pool.query('SELECT * FROM contact', (err, data) => {
    res.render('xem', { title: 'Express', data: data.rows });
  }); 
});

router.get('/them', function(req, res){
    res.render('them', {title: 'Thêm dữ liệu'});
});
router.post('/them', function(req, res){
  let ten = req.body.ten;
  let tuoi = req.body.tuoi;
  pool.query("INSERT INTO contact(ten,tuoi) VALUES($1,$2)",[ten,tuoi],(err,success) => {
    res.redirect('/xem'); 
  });
});
router.get('/xoa/:id', function(req, res){
  pool.query("DELETE FROM contact WHERE id = $1",[req.params.id], function(err, success){
    res.redirect('/xem')
  });
});
router.get('/sua/:id', function (req,res) {
  pool.query("SELECT * FROM contact WHERE id = $1",[req.params.id], function(err, data){
    console.log(data);
    res.render('sua',{title: "sữa", nguoidung: data.rows[0]});
  }); 
});
router.post('/capnhat/:id', function(req, res){
  pool.query("UPDATE contact SET ten = $1, tuoi = $2 WHERE id = $3",[req.body.ten, req.body.tuoi, req.params.id], function(err, success){
    res.redirect('/xem');
  });
});
module.exports = router;
