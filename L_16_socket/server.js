/**
 * Created by deepak on 7/14/17.
 */
var express=require('express');
var app=express();
var http=require('http');
var server =http.Server(app);
var socket=require('socket.io');
var io=socket(server);
var arr=[];
console.log(arr.length);


// app.use('/',express.static('public_static'));
// io.on('connection',function (socket) {
//     console.log('connection is establised');
//     if(arr.length>0){io.emit('get',arr);};
//     socket.on('receive_msg',function(data){
//         console.log(data);
//         arr.push(data);
//         io.emit('get',data);
//         // io.broadcast.emit('get',data);for all except me
//     });
// })
var connectedp=[];
app.use('/',express.static('public_static'));
io.on('connection',function (socket) {
    // console.log(socket.id);
    console.log('connection is establised');
    io.emit('connectedpeople',connectedp);
    if(arr.length>0){io.emit('all',arr);};
    socket.on('username',function(username){
        connectedp.push({'name':username,'id':socket.id});
        console.log(connectedp);
        io.emit('connectedpeople',connectedp);
    });

    socket.on('receive_msg',function(data){
        console.log(data);
        arr.push(data);
        io.emit('get',data);
        io.emit('connectedpeople',connectedp);
        // io.broadcast.emit('get',data);for all except me
    });
    socket.on('disconnect',function(){
        console.log('user disconnected');
        var i=0;
        connectedp.forEach(function(z){
            if(z.id===socket.id){
                connectedp.splice(i,1);
                return;
            }
            i++;
        })
        io.emit('connectedpeople',connectedp);

    })
})


server.listen(5000,function(){
    console.log('server is listening on port 5000');
})