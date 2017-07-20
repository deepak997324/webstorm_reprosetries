/**
 * Created by deepak on 7/11/17.
 */

var express=require('express');
app=express();
var todolist;
fs=require('fs');

app.use(express.static('public_static'));

app.get('/postdata',function(req,res){
    todolist=(req.query.todo);

fs.writeFile('todofile.txt',todolist,function(err){
    if(err) throw err;
    res.send('file has been written');
});

});
app.get('/getdata',function(req,res){
    fs.readFile('./todofile.txt',function(err,data){
        if(err){
            res.send(err);
            console.log(err);
        }
        else {
            res.send(data);
            console.log(data);
        }
    });



});
app.listen(5000,function(req,res){
    console.log('server is listening on port 5000');
});

