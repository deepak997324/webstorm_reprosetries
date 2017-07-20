var mysql = require('mysql');

var dbconfig = {
    host     : 'localhost',
    user     : 'username',
    password : 'newpassword',
    database : 'main'
};

function saveTodos(x){
    var connection=mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('INSERT INTO image SET ?',x,function (error,rows,fields) {
    if(error){
        console.log('error happend');
        throw error;
    }
    })
};

module.exports={
    save:saveTodos,

};