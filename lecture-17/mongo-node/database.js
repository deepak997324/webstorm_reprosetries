/**
 * Created by deepak on 7/16/17.
 */
var mongodb=require('mongodb');

var url='mongodb://localhost:27017/shoping';
var obj='';
function connectdb(run_server){
mongodb.MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log('connection is established');
    obj=db;
    run_server();
})}

function insertTodo(task,callback){
    console.log('i am in insert section');
    obj.collection('todoList').insertOne(task,function(err,result)
    {callback(result);});
}
function findTodo(callback){
    console.log('i am in find section');
    obj.collection('todoList').find({}).toArray(function(err,data){
        callback(data);
    })
}



module.exports={
    connectdb:connectdb,
    insertTodo:insertTodo,
    findTodo:findTodo
}
