/**
 * Created by deepak on 7/11/17.
 */
var mysql = require('mysql');

var dbconfig = {
    host     : 'localhost',
    user     : 'username',
    password : 'newpassword',
    database : 'main'
};
function saveTodos(ans){
    var connection =mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('TRUNCATE TABLE todoproject',function(error,rows,fields){
        if(error) throw error;
        console.log('table truncated');
        var todolist=JSON.parse(ans);
            todolist.forEach(function(z){
                    (function(y){
            var str='INSERT INTO todoproject(title,comment,date,time,checked) VALUES("'+z.title+'","'+z.comment+'","'+z.date+'","'+z.time+'",'+z.checked+')';
            connection.query(str,function(error,rows,fields){
                if(error) throw error;
            });
            console.log(str);
            })(z);
            }
            );
    });

}
function getTodos(cb){
  var connection=mysql.createConnection(dbconfig);
  connection.connect();
  connection.query('SELECT * FROM todoproject',function (error,rows,fields) {
    cb(rows);
  })
};
module.exports={
    save:saveTodos,
    get:getTodos
};