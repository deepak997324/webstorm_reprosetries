/**
 * Created by deepak on 7/12/17.
 */
var express=require('express');
var app= express();
var path=require('path');

var bodyparser = require('body-parser');
app.use('/',express.static('views'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.set('view engine')

app.post('/upload',function(req,res){
    var query='SELECT * FROM todos';
});

app.listen(5000||process.env,function(){
    console.log('listening on port 5000');
})