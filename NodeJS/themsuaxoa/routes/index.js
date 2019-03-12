var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var chuyenthanhObjectId = require('mongodb').ObjectId;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'contact';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/** Xem dữ liệu */
router.get('/xem', function(req, res){
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('nguoidung');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      callback(docs);
    });
  }
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    findDocuments(db, function(data) {
      res.render('xem',{title: 'Xem dữ liệu', data: data});
      console.log(data);
      client.close();
    });
  });
});

/** Thêm dữ liệu */
router.get('/them', function(req, res){
  res.render('them', {title: "Thêm dữ liệu"});
});

router.post('/them', function(req, res){
  var ten = req.body.ten;
  var dienthoai = req.body.dienthoai;
  var data = {
    ten: ten,
    dienthoai: dienthoai
  }
  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('nguoidung');
    // Insert some documents
    collection.insert(data, function(err, result) {
      assert.equal(err, null);
      console.log("Thêm thành công!");
      callback(result);
    });
  }
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
  
    insertDocuments(db, function() {
      client.close();
    });
  });
  res.redirect('/xem');
});

router.get('/sua/:id', function(req, res){
    let id = chuyenthanhObjectId(req.params.id);
    const findDocuments = function(db, callback) {
      // Get the documents collection
      const collection = db.collection('nguoidung');
      // Find some documents
      collection.find({_id: id}).toArray(function(err, nguoidung) {
        assert.equal(err, null);
        console.log(nguoidung);
        callback(nguoidung);
      });
    }
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
      assert.equal(null, err);
      const db = client.db(dbName);
      findDocuments(db, function(nguoidung) {
        res.render('sua', {title: "Sữa",nguoidung:nguoidung[0]});
        client.close();
      });
    });
});

router.get('/xoa/:id', function(req, res){
  var idXoa = chuyenthanhObjectId(req.params.id);
  console.log(idXoa);
  const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('nguoidung');
    collection.deleteOne({ _id : idXoa }, function(err, result) {
      assert.equal(err, null);
      callback(result);
    });  
  }
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    removeDocument(db, function() {
      client.close();
      res.redirect('/xem');
    }); 
  });
});
router.post('/capnhat/:id', function(req,res){
  var id = chuyenthanhObjectId(req.params.id);
  var ten = req.body.ten;
  var dienthoai = req.body.dienthoai;
  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('nguoidung');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ _id : id }
      , { $set: { ten : ten,dienthoai: dienthoai } }, function(err, result) {
      assert.equal(err, null);
      callback(result);
    });  
  }
  // Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  updateDocument(db, function() {
    client.close();
    res.redirect('/xem');
  });
});
});

module.exports = router;
