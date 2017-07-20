/**
 * Created by deepak on 7/8/17.
 */

$(function () {
    var output = $('#output');
    var url = '/postData?todo=';

    $('#btn').click(function () {
        var val = $('#inp').val();
        $.ajax({url: url+ val, success: function(result){

            refresh(result);
        }});

    });
    function refresh(todoArray) {
        output.html('');
        todoArray.forEach(function(z){
            output.append(z);
        })

        todoArray = [];


    }
    // function refresh(a) {
    //     output.html(a) ;
    //
    // }

});
