/**
 * Created by deepak on 7/19/17.
 */

var express =require('express');
var cookieparser=require('cookie-parser');
var passport=require('passport');
var passportlocal=require('passport-local').Strategy;
var bodyparse=require('body-parser');
var session=require('express-session');
var userconfig=require('./userconfig.json');
var app=express();
console.log(userconfig);
app.use(express.static('public_static'));


app.use(cookieparser());
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:true}));
app.use(session({secret:'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
    passport.authenticate('local',
                                    { successRedirect: '/sucess',
                                    failureRedirect: '/login'})
);
app.get('/sucess',function(req,res){
    res.send('login happens');
})

passport.use(new passportlocal(
    function(username, password, done) {
        if(userconfig.username!==username){
            return done(null,false,{'messege':'pleae enter valid username'})
        }
        if(userconfig.password!==password){
            return done(null,false,{'messege':'pleae enter valid password'})
        }
        console.log(userconfig.username);
        return done(null,userconfig.username);

    }
));
passport.serializeUser(function(user,done){
    done(null,user);
});
passport.deserializeUser(function (user,done) {
    done(null,user);
});

app.listen(5000,function () {
    console.log('server on 5000 is ok');
});