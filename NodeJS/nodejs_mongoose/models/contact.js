var mongoose = require('mongoose');
var schema = new mongoose.Schema({ ten: 'string', tuoi: 'number' },{collection: 'contact'});
var contact = mongoose.model('contact', schema);
module.exports = contact;