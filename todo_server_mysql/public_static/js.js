/**
 * Created by deepak on 7/9/17.
 */

$(function(){
    var todo=[];
    var tempobj={
        'check':false,
        'finalid':null
    };
    $.get({url:'/getdata',success:function(result){
        for(var i=0;i<Object.keys(result).length;i++){
            todo.push(result[i.toString()]);
        }
        console.log(todo);
        update();
    }})
    $('#save').click(function () {
var obj = {};
    obj['title']=$('#usr').val();
    obj['comment']=$('#comment').val();
    obj['time']=$('#time').val();
    obj['date']=$('#date').val();
    obj['checked']=false;
    if(tempobj['finalid']){
        obj['checked']=tempobj['check'];
        todo.splice(tempobj['finalid']-1,1);
        tempobj['check']=false;
        tempobj['finalid']=null;
    }
    todo.push(obj);
        $.get({url:'/postdata?todo='+JSON.stringify(todo),success:function(result){
            console.log(result);
        }});

        update();
});
$('#add').click(function () {
   $('#usr').val('');
  $('#comment').val('');
    $('#time').val('');
   $('#date').val('');

});
$('#all').click(function () {
    update();
});
$('#ptask').click(function () {
    undoneupdate();
});
$('#dtask').click(function(){
    doneupdate();
});
$('#ddt').click(function(){
    for(var i=0;i<todo.length;i++){

        if(todo[i].checked=='on' || todo[i].checked==true){
            todo.splice(i,1);i--;

        }
    }
    $.get({url:'/postdata?todo='+JSON.stringify(todo),success:function(result){
        console.log(result);
    }});

    update();

})
$('#dal').click(function () {
    todo=[];
    $.get({url:'/postdata?todo='+JSON.stringify(todo),success:function(result){
        console.log(result);
    }});

    update();
});

$(document).on('click','.editbtn',function () {
    var id= $(this).attr('id');
    id=parseInt(id);
    var obj=todo[id-1];
    $('#usr').val(obj.title);
    $('#comment').val(obj.comment);
    $('#time').val(obj.time);
    $('#date').val(obj.date);
    tempobj['check']=obj.checked;
    tempobj['finalid']=id;
});
$(document).on('click','.checkbox',function(){
    var checkid=$(this).attr('id');

    checkid=parseInt(checkid.slice(5));
    todo[checkid-1].checked=this.checked;
    $.get({url:'/postdata?todo='+JSON.stringify(todo),success:function(result){
        console.log(result);
    }});

});
$(document).on('click','.delete',function(){
    var deleteid=$(this).attr('id');
    deleteid=parseInt(deleteid.slice(6));
    todo.splice(deleteid-1,1);
    $.get({url:'/postdata?todo='+JSON.stringify(todo),success:function(result){
        console.log(result);
    }});

    update();
});





function update(){
    var x=$('#accordion');
    x.html('');
    var i;
    for(i=1;i<todo.length+1;i++){
        var z=todo[i-1];
        var check =' ';
        if(z.checked=='on' || z.checked==true || z.checked==1){
            check=' checked ';
        }
        x.append(
        '<div class="panel panel-default">'+
                '<div class="panel-heading">'+
                '<h4 class="panel-title">'+
                '<table>'+
                '<thead>'+
                '<td class="col1"><input type="checkbox" class="checkbox" id="check'+i+'"'+check+'></td>'+
                '<td class="col2">'+z.title+'</td>'+
                '<td class="col4">'+z.time+'</td>'+
                '<td class="col5">'+z.date+'</td>'+
                '<td class="col3">'+
                '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'">'+
                '<i class="fa fa-caret-square-o-down fa-2x" aria-hidden="true"></i></a>'+
                '<i class="fa fa-pencil-square-o fa-2x editbtn" id="'+i+'" data-toggle="modal" data-target="#myModal" aria-hidden="true"></i>'+
                '<i class="fa fa-trash-o fa-2x delete" aria-hidden="true" id="delete'+i+'"></i>'+
                '</td>'+
                '</thead>'+
                '</table>'+
                '</h4>'+
                '</div>'+
                '<div id="collapse'+i+'" class="panel-collapse collapse">'+
                '<div class="panel-body">'+z.comment+'</div></div></div>'
        )}}
    function doneupdate(){
        var x=$('#accordion');
        x.html('');
        var i;
        for(i=1;i<todo.length+1;i++){
            var z=todo[i-1];
            var check =' ';
            if(z.checked=='on' || z.checked==true){
                check=' checked ';

            x.append(
                '<div class="panel panel-default">'+
                '<div class="panel-heading">'+
                '<h4 class="panel-title">'+
                '<table>'+
                '<thead>'+
                '<td class="col1"><input type="checkbox" class="checkbox" id="check'+i+'"'+check+'></td>'+
                '<td class="col2">'+z.title+'</td>'+
                '<td class="col4">'+z.time+'</td>'+
                '<td class="col5">'+z.date+'</td>'+
                '<td class="col3">'+
                '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'">'+
                '<i class="fa fa-caret-square-o-down fa-2x" aria-hidden="true"></i></a>'+
                '<i class="fa fa-pencil-square-o fa-2x editbtn" id="'+i+'" data-toggle="modal" data-target="#myModal" aria-hidden="true"></i>'+
                '<i class="fa fa-trash-o fa-2x delete" aria-hidden="true" id="delete'+i+'"></i>'+
                '</td>'+
                '</thead>'+
                '</table>'+
                '</h4>'+
                '</div>'+
                '<div id="collapse'+i+'" class="panel-collapse collapse">'+
                '<div class="panel-body">'+z.comment+'</div></div></div>'
            )}
        }}

    function undoneupdate(){
        var x=$('#accordion');
        x.html('');
        var i;
        for(i=1;i<todo.length+1;i++){
            var z=todo[i-1];
            var check =' ';
            if(z.checked=='on' || z.checked==true){
                check=' checked ';
            }
            else{
            x.append(
                '<div class="panel panel-default">'+
                '<div class="panel-heading">'+
                '<h4 class="panel-title">'+
                '<table>'+
                '<thead>'+
                '<td class="col1"><input type="checkbox" class="checkbox" id="check'+i+'"'+check+'></td>'+
                '<td class="col2">'+z.title+'</td>'+
                '<td class="col4">'+z.time+'</td>'+
                '<td class="col5">'+z.date+'</td>'+
                '<td class="col3">'+
                '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+i+'">'+
                '<i class="fa fa-caret-square-o-down fa-2x" aria-hidden="true"></i></a>'+
                '<i class="fa fa-pencil-square-o fa-2x editbtn" id="'+i+'" data-toggle="modal" data-target="#myModal" aria-hidden="true"></i>'+
                '<i class="fa fa-trash-o fa-2x delete" aria-hidden="true" id="delete'+i+'"></i>'+
                '</td>'+
                '</thead>'+
                '</table>'+
                '</h4>'+
                '</div>'+
                '<div id="collapse'+i+'" class="panel-collapse collapse">'+
                '<div class="panel-body">'+z.comment+'</div></div></div>'
            )}}}



});




