/**
 * Created by deepak on 7/14/17.
 */
(function($){
    var person='std';
    var text;
    var password;
    $('#login1').click(function(){
        person='std';
        text=$('#text1').val();
        password=$('#password1').val();
    });
    $('#login2').click(function(){
        person='prof';
        text=$('#text2').val();
        password=$('#password2').val();
    })
    $('#login3').click(function(){
        person='director';
        text=$('#text3').val();
        password=$('#password3').val();
    })






})(jQuery);