const express=require("express");
const app=express();
app.use(express.urlencoded({ extended: true }));
var ses=false;

app.set('view engine', 'ejs');

app.get("/", function(req,res){
        if(ses){
            res.send("<h1>Secret</h1><br><a href='/logout'>Logout</a>");
        }
        else{
            res.send("<h1>Not Log in");
        }
});
 
app.get("/login", function(req,res){
    res.render("login");
});

app.get("/logout", function(req,res){
    ses=false;
    res.redirect("/");
});
app.post("/auth",function(req,res){
    var u=req.body.user;
    var p=req.body.pass;
    if(u=='test'&&p=='test'){
        ses=true;
    }
    else{
        ses=false;
    }
    res.redirect("/");

});

app.listen(5000,function(req,res){
            console.log("Demon Started on port 5000");
});