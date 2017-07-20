/**
 * Created by deepak on 7/17/17.
 */
(function($){
    $(function(){

        var x=JSON.parse(sessionStorage.getItem('maindata'));
        var username=x.username;
        var password=x.password;
        console.log('hey i am in profile '+ username+" "+password);



    })
})(jQuery);