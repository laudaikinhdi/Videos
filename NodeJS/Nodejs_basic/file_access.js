var  fs = require("fs");
fs.open("./data.txt","r+", function(err, file){
    if(err){
        console.log("Open file is error!");
        return;
    }
    console.log("Open file successfully!");
});
var data = fs.readFileSync("data.txt");
console.log(data.toString());
fs.readFile("data.txt",function(err, data){
    if(err){
        console.log("Read file is error!");
    }else{
        console.log(data.toString());
    }
});

fs.writeFile("data.txt","Thanh Tan", function(err){
    if(err){
        console.log(err);
    }else{
        fs.readFile("data.txt", function(err, data){
            if(err){
                console.log(err);
            }else{
                console.log(data.toString());
            }
        });
    }
});

fs.mkdir("New Folder", function(err){
    if(err){
        console.log("error create folder");
    }else{
        console.log("Create Foler successfully!");
    }
});