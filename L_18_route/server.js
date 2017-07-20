/**
 * Created by deepak on 7/19/17.
 */

var express=require('express');

var app=express();

var route={
    secure:require('./route/secure'),
    notsecure:require('./route/notsecure')
}

app.use('/secure',route.secure);
app.use('/notsecure',route.notsecure);

app.listen(5000,function(){
    console.log('app is listening on port5000');
})