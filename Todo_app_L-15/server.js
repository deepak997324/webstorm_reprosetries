/**
 * Created by deepak on 7/12/17.
 */
var express =require('express');
var bodyParser=require('body-parser');
var app=express();

var path=require('path');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use('/',express.static(path.join(__dirname,'public_static')));
app.use('/',express.static('public_static'));

app.post('/getdata',function(req,res){
    console.log('a req has benn made');
    console.log(req.body);
    //console.log(req.body.key);
    //console.log(req.body);

    res.send(req.body);

});
app.listen(5000 || process.env.port,function() {
    console.log('port is running on port 5000');
});