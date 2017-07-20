/**
 * Created by deepak on 7/14/17.
 */
var username=prompt('enter your name');
// $(function () {
//     // socket.emit('refresh','');
//     var socket =io();
//     $('#btn').click(function () {
//         socket.emit('receive_msg',username+' :'+$('#inp').val());
//     })
//     socket.on('get',function(arr){
//         console.log(arr);
//         $('#box').html('');
//         var x=$('#box');
//         arr.forEach(function(z){
//             x.append('<li>'+z+'</li>');
//         })
//     })
//
//
// })
$(function () {

    var socket =io();
        socket.emit('username',username);
    $('#btn').click(function () {
        socket.emit('receive_msg',username+' :'+$('#inp').val());
    })
    socket.on('get',function(data){
        console.log(data);
        var x=$('#box');
            x.append('<li>'+data+'</li>');
    })
    socket.on('connectedpeople',function (arr) {
        $('#box2').html('');
        var x=$('#box2');
        console.log(arr);
        arr.forEach(function(z){
            x.append(z.name+'<br>');
        })

    })
    socket.on('all',function(arr){
        $('#box').html('');
        var x=$('#box');
        arr.forEach(function (z) {x.append('<li>'+z+'</li>');})
    })


})
