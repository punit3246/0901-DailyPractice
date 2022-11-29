const express =require('express');
const bodyparser =require('body-parser');
const ejs =require('ejs');

const app =express();
app.set('view engine','ejs')
app.use(bodyparser.urlencoded({extended:true}));

let newitems= []
app.get('/',(req,res)=>{
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let  today  = new Date();
let day =today.toLocaleDateString("en-US", options);
   res.render("list",{KindofDay :day , newListItems :newitems}); 
});

app.post('/',(req,res)=>{
    let newitem= req.body.newitem;
    newitems.push(newitem);
     res.redirect('/');
});





app.listen(4000);