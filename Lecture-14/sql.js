/**
 * Created by deepak on 7/9/17.
 */

var mysql = require('mysql');

var dbconfig = {
    host     : 'localhost',
    user     : 'username',
    password : 'newpassword',
    database : 'main'

};
function getTodos(cb){
    var connection = mysql.createConnection(dbconfig);
    console.log('connection happens');
    connection.connect();
    connection.query('SELECT * FROM todos',function(error,rows,fields){
        if(error) throw error;
        console.log(rows);
        cb(rows);

    })
}
function UpdateTodos(cb) {

}
module.exports = {
    get:getTodos,
    // update:


}
