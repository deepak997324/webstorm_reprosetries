/**
 * Created by deepak on 7/10/17.
 */
$(function () {
    var i=1;
    $('#add').click(function(){
    $('#box').append(
    "<button type='button' class='btn' id="+i+">btn"+i+"</button>"
    );
    i++;
    });
    $('.btn').click(function(){
        conole.log($(this).attr('id'));
    })



})