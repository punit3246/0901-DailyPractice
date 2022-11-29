const express=require("express");
const https=require("https");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))
//var file;

app.set('view engine', 'ejs');
app.get("/",(req,res)=>{
    var new_name="Punit"
    res.render('Home',{name:new_name});
});


// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// });

// app.post("/save",(req,res)=>{
//     var num1=req.body.num1;
//     var num2=req.body.num2;
//     var c=Number(num1)+Number(num2);
//     if(c==0)
//     {
//         file={
//             statusCode:404,
//             add:"Problem"
//         }
        
//     }
//     else{
//             file={
//                 statusCode:200,
//                 add:c
//             }
//         }
// });
// app.get("/data",(req,res)=>{
//     res.send(file);
// });

app.listen(3000);


//After this run nodemon index.js and then go to the browser and write the numbers after that open new tab and then write localhost:3000/data and then data will be fetched.