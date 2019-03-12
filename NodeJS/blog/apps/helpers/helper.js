var bcrypt = require('bcrypt');
var config = require("config");


function hash_password(password){
    var saltRounds = config.get("saltRounds");
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(password, salt);

    return hash;
}
function check_password(password, hash){
    return bcrypt.compareSync(password, hash);
}

module.exports = {
    hash_password: hash_password,
    check_password: check_password
}