module.exports = function(io){
    var usernames = []; // all users
    io.sockets.on("connection", function(socket){
        console.log("Have new user connect");

        socket.on("addUser", function(username){
            socket.username = username; //save username in server;

            usernames.push(username);

            //Notify to myself

            var data = {
                sender: "SERVER",
                message: "You have join to chat room"
            };

            socket.emit("update_message", data);

            //Notify to other users

            var data = {
                sender: "SERVER",
                message: username + " join to chat room"
            }

            socket.broadcast.emit("update_message", data); // gui den tat ca user khac tru mình
        });

        socket.on("sendMessage", function(message){
            var data = {
                sender: "You",
                message: message
            };

            //Notify to meself
            socket.emit("update_message", data);

            //Notify to users other
            var data = {
                sender: socket.username,
                message: message
            }

            socket.broadcast.emit("update_message", data);
        });

        //Listen disconnect
        socket.on("disconnect", function(){
            //Delete user disconnect
            for( var i = 0; usernames.length; i++){
                if(usernames[i] == socket.username){
                    usernames.splice(i, 1);

                    var data = {
                        sender: "SERVER",
                        message: socket.username + " left chat room"
                    };
                    //Notify other users
                    socket.broadcast.emit("update_message", data);
                }
            }
        })
    });
}