/**
 * Created by deepak on 7/12/17.
 */
var express = require('express');
var app = express();
var bodyParse=require('body-parser');
var fs=require('fs');
var multer=require('multer');


app.use('/', express.static('public_static'));
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());


//app.use(multer({dest:'tmp/'}));
app.use(multer({dest:'./uploads/'}).any());

app.post('/upload',  function(req, res) {
    console.log(req.files);
    if(err) throw err;
    else console.log(req.files.photo);

});



// app.post('/upload', function(req, res) {
//     // req.files
//     if (!req.files) {
//         console.log(req.files);
//         return res.status(400).send('No files were uploaded.');
//     }
//     console.log(req.files);
//
//     // var textfile = req.images.foo;
//     console.log(textfile);
//     console.log('img is here');
//     mysql.save({img:textfile,file_name:'backimg'});
//     // the uploaded file object
//     // textfile.mv('./text.txt');
//     // res.redirect('/');
//     res.send('successfully written');
// });

app.listen(5000, function() {
    console.log("Port 5000");
});