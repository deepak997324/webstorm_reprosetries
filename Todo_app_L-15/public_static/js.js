/**
 * Created by deepak on 7/12/17.
 */
$(function(){
    $('#btn').click(function() {
        console.log('btn has been clicked');
        $.post({
            url: '/getdata', data: {fname: 'deepak', lname: 'gupta'}, success: function (result, status) {
                console.log(result);
                console.log('result is ready');
            }
        });
    })

})