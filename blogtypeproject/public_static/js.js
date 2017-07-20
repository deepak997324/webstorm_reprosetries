/**
 * Created by deepak on 7/14/17.
 */
var username='';
var password='';
(function($){
    $(function(){
        $('#login1').click(function(){
            username=$('#text1').val();
            password=$('#password1').val();
            console.log(username+' '+password);
            sessionStorage.setItem('maindata',JSON.stringify({'username':username,'password':password}));
            $(location).attr('href','/profile.html');
        })
        $('#signup1').click(function () {
            if($('#form4').val()===$('#form5').val()){
                var name=$('#form3').val();
                username=$('#form2').val();
                password=$('#form4').val();
                var check=$('#checkbox1').prop('checked');
                console.log(username+' '+password+" "+name+' '+check);
                sessionStorage.setItem('maindata',JSON.stringify({'username':username,'password':password}));
                $(location).attr('href','/profile.html');


            }
            else{
                $(location).attr('href','/');
                console.log('err');
            }
        })









    })
})(jQuery);
