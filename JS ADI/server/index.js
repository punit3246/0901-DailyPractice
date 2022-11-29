var express=require("express");
const bodyParser = require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({extended: false}))

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/pages/Home.html");
});
app.get("/about", (req,res)=>{
    res.sendFile(__dirname+"/pages/About.html");
});
app.get("/cont", (req,res)=>{
    res.sendFile(__dirname+"/pages/Contact.html");
});
app.get("/blog", (req,res)=>{
    res.sendFile(__dirname+"/pages/Blog.html");
});
// app.get("/Home",(req,res)=>{
//     res.redirect("/");
// });

app.post("/sendvalue", (req,res)=>{
    res.send(req.body);
    // var n1=req.body.num1;
    // var n2=req.body.num2;
    // var n3=Number(n1)+Number(n2);
    // res.send(n3);
});

app.listen(3060);