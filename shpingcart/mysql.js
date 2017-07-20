/**
 * Created by deepak on 7/15/17.
 */
var mysql=require('mysql');
var dbconfig={
    host:'localhost',
    user:'username',
    password:'newpassword',
    database:'main'
};
function getdata(cb){
    var connection=mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('SELECT * FROM cart',function(errors,rows,fields){
        cb(rows);
    });
    connection.end();
}
module.exports={
    getdata:getdata
}