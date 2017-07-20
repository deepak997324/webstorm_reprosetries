/**
 * Created by deepak on 7/9/17.
 */

$(function(){

$('#btn').click(function () {

    $.get({url:'todos/get',success:function (data) {
        console.log(data);
        console.log(Object.keys(data).length);

    }});
    // $.post('/todos/post',{id:10,},function (data) {
    //     console.log(data);
    // });


})

    });