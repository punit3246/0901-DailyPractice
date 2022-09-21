const Output=(val2)=>{
          
    let val=document.getElementById("search").value;
    val=Number(val);

    if(val2=="Moon"){
        let val1=val*0.166;
        val1=val1.toFixed(2);
        document.getElementById("output").innerHTML="The weight of object on Moon is "+val1+"Kg";
    }
   
    else if(val2=="Mercury"){
        let val1=val*.38;
        val1=val1.toFixed(2);
        document.getElementById("output").innerHTML="The weight of object on Mercury is "+val1+"Kg";
    }
    else  if(val2=="Mars"){
        let val1=val*.38;
        val1=val1.toFixed(2);
        document.getElementById("output").innerHTML="The weight of object on Mars is "+val1+"Kg";
    }
    else  if(val2=="Venus"){
        let val1=val*.9;
        val1=val1.toFixed(2);
        document.getElementById("output").innerHTML="The weight of object on Venus is "+val1+"Kg";
    }   
    else  if(val2=="Sun"){
        let val1=val*28;
        val1=val1.toFixed(2);
        document.getElementById("output").innerHTML="The weight of object on Sun is "+val1+"Kg";
    } 
    else  if(val2=="Jupiter"){
        let val1=val*2.54;
        val1=val1.toFixed(2);
        document.getElementById("output").innerHTML="The weight of object on Jupiter is "+val1+"Kg";
    }
    else  if(val2=="Uranus"){
        let val1=val*.89;
        val1=val1.toFixed(2);
        document.getElementById("output").innerHTML="The weight of object on Uranus is "+val1+"Kg";
    }
    else  if(val2=="Saturn"){
        let val1=val*1.07;
        val1=val1.toFixed(2);
        document.getElementById("output").innerHTML="The weight of object on Saturn is "+val1+"Kg";
    }
    else  if(val2=="Neptune"){
        let val1=val*1.14;
        val1=val1.toFixed(2);
        document.getElementById("output").innerHTML="The weight of object on Neptune is "+val1+"Kg";
    }
    else  if(val2=="Pluto"){
        let val1=val*.62;
        val1=val1.toFixed(2);
        document.getElementById("output").innerHTML="The weight of object on Pluto is "+val1+"Kg";
    }

        
   
}