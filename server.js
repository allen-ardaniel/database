//this js file mostly consists of node principles (at least yan yung pagkaintindi ko, quiet ka lang about sa password, yan password ko sa database AHAHAH)
var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({

    host:'localhost',
    port: '3307',
    user:'root',
    password:'A1sd2gf3z1xc2bv3$',
    database:'mathrix_questions'

});

var server = app.listen(1347, function(){
    var host = server.address().address
    var port = server.address().port
});

con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});

app.get('/arithmetic', function(req, res){
    con.query('select * from arithmetic', function(error, rows, fields){
        if (error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    });
});
