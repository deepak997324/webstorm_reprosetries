/**
 * Created by deepak on 7/13/17.
 */
var mysql = require('mysql');

var dbconfig = {
    host     : 'localhost',
    user     : 'username',
    password : 'newpassword',
    database : 'main'
};
function getstudentdata(ans,cb){
    var connection =mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('TRUNCATE TABLE todoproject',function(error,rows,fields){
        if(error) throw error;

    });
    connection.end();
}
function getintitialdata(ans,cb){
    var connection =mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('SELECT * FROM latestupdate',function(error,rows,fields){
        if(error){
            res.redirect('/404.html');
            throw error;
        }
        var row=rows['0'].latest;
        connection.query('SELECT * FORM '+ans+' WHERE rows='+row,function(error,rows,fields){
            if(error){
                res.redirect('/404.html');
                throw error;
            }
            cb(rows);
        })
    });
    connection.end();
}
module.exports={
    getstudentdata:getstudentdata,
    getinitialstudentdata:getintialdata
};