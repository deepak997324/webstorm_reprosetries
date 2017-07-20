/**
 * Created by deepak on 7/16/17.
 */
var mongodb=require('mongodb');

var url='mongodb://localhost:27017/mytodos';
mongodb.MongoClient.connect(url,function(err,db){
    console.log('connected to db')
    insertitem(db,function(data){
        console.log(data);
    });
    updateitem({task:'main task'},db,function(data){
        console.log(data);
        finditem(db,function(x){
            console.log(x);
        })

    })



});
function updateitem(task,db,callback){
    var collection=db.collection('TodoList');
    collection.updateOne(task,{$set:{
        'task':'no task'
    }},function(err,data){
        callback(data);
        }
    )
}

//

// function insertitem(db,callback){
//     var collection=db.collection('TodoList');
//     collection.insertOne({task:'main task',done:true},function(err,data){
//         if(err) throw err;
//         callback(data);
//     });
// }
function insertitem(db,callback){
    var collection=db.collection('TodoList');
    collection.insertOne([
                {task:'main task',done:true},
                {task:'main task',done:true}
                ],function(err,data){
                if(err) throw err;
                callback(data);
    });
}
function finditem(db,callback) {
    var collection=db.collection('TodoList');
    collection.find({}).toArray(function(err,result){
        //you can place count in the place of toArray
        callback(result);
    })
}