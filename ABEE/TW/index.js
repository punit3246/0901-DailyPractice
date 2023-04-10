const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');

const app=express();

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root', /* MySQL User */
  password: '', /* MySQL Password */
  database: 'node_restapi' /* MySQL Database */
});

conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected with App...');
});



app.get("/", function(req,res)  {
  let sqlQuery = "SELECT * FROM items";

  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.render("home",{results});
  });
});

app.post('/create',(req, res) => {

    let data = {title: req.body.title, body: req.body.body, createdUser: req.body.usr};
  
  
    let sqlQuery = "INSERT INTO items SET ?";
  
    let query = conn.query(sqlQuery, data,(err, results) => {
      if(err) throw err;
      else {
        res.redirect("/home");
      }
    });
  });

app.get("/create",function(req,res){
    res.render("create");
});   

app.listen(3000,function(req,res){
    console.log('Server started on port 3000...');
})