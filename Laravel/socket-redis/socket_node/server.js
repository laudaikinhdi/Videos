var io = require('socket.io')(6001);

console.log('Connect to port 6001');

io.on('error', function(socket){
    console.log('error');
});
io.on('connection', function(socket){
    console.log('User connect ' + socket.id);
    socket.on('send', function(data){
       io.emit('sended', {
           message: data.message,
           name: data.name
       });
    });
});

var Redis = require('ioredis');
var redis = new Redis(8888);

redis.psubscribe('*', function(error, count){

});

redis.on('pmessage', function(partner, channel, message){
    // partent phần tử nào đó bất kì khi có người kết nói
    // channel : event return về
    // message

    message = JSON.parse(message);

//  io.emit(channel + ":" + message.event, message.data.message);
//     console.log(message);
    // io.emit(channel+":"+message.event,message.data.message); chat
    io.emit(channel+":"+message.event,message.data);
    console.log('Sent')
})
