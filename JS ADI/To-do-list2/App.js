var express = require('express');
var app = express();
var mysql= require('mysql');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "to-do-list2"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

 var task1;

 app.post("/addtask",(req,res)=>{
    var task=req.body.newtask;
    var sql = "INSERT INTO list (sl_no,task) VALUES ?";
    var values=[[,task]];
  con.query(sql,[values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted"); 
    res.redirect("/");
  });
});
  
app.get("/", function(req, res) { 
  var sql="SELECT * FROM list ;";
  con.query(sql,function(err,result){
    if(err) throw err;
    res.render("index", { task:result, complete: complete });
  })   
   
});
var complete = [""];
app.post("/removetask", function(req, res) {
    var completeTask = req.body.check;
    var sql="DELETE FROM list where sl_no="+completeTask+" ";
    var a="SELECT task FROM list WHERE sl_no="+completeTask+" ";
    
   
    con.query(sql,function(err,result){
      if(err)throw err;
      console.log("deleted");
    })
   res.redirect("/");
});

app.listen(4000);