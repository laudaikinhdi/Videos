var my_module = require("./my_model");

var message = my_module.message("Hello Tan");
console.log(message);
var add = my_module.add(5,250);
console.log(add);
var sub = my_module.sub(5, 10);
console.log(sub);