/**
 * Created by deepak on 7/16/17.
 */

var express=require('express');
var app =express();
var bodyParser=require('body-parser')
app.use('/',express.static('public_static'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/getdata/medical',function(req,res){
   console.log(req.query);
   res.send(data);
});
app.post('/maindata',function (req,res) {
    console.log(req.body);
    data=req.body;
    res.send('data seved');
})

app.listen(5000,function(){
    console.log('server is lisening to port 5000');
})