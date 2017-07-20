/**
 * Created by deepak on 7/15/17.
 */
(function($){
    // console.log('i am in IIFE');
    $(function(){
        console.log('i am in jquery');
        $.get({url:'/getdata',success:function(result){
            console.log();
        }})
        for(var i=0;i<15;i++){
    $('#box').append(
        '<div class="col-md-4 col-lg-4 col-sm-6 col-xl-4" style="margin-top:10px ">'+
        '<div class="card">'+
        '<div class="view overlay hm-white-slight z-depth-1">'+
            '<img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/belt.jpg" class="img-fluid" alt="">'+
            '<a>'+
            '<div class="mask waves-effect waves-light"></div>'+
            '</a>'+
            '</div>'+



        '<div class="card-block">'+
            '<div class="text-center">'+

            '<h5>Category</h5>'+
            '<h4 class="card-title"><strong><a href="">Product name</a></strong></h4>'+


        '<p class="card-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.'+
        '</p>'+
        '</div>'+

        '<div class="card-footer">'+
        '<span style="float: right"><a class="" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><i class="fa fa-heart" id="heart"></i></a></span>'+

            '<span><i class="fa fa-rupee" area-hidden="true"></i>499</span>'+
         '   </div>'+

            '</div></div>'+


        '</div>'
    )}





    })
})(jQuery)
