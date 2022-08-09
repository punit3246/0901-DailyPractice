function myfun(){
    let x = document.getElementById("n1").value;
    x=Number(x);
    let s = 0; //s=sum
    let c = 0; //c=count
    while(x>0){
        s=s+x%10;
        x=x/10;
        x=Math.trunc(x);
        c=c+1;
    }
    if(c==5){
        document.getElementById("circle").style.width=s+"px";
        document.getElementById("circle").style.height=s+"px";
        let rad=s/1;
        document.getElementById("circle").style.borderRadius=rad+"px";
        document.getElementById("p1").innerHTML="";
    }
    else{
        document.getElementById("p1").style.color="red";
        alert("Please enter 5 digit number");
        document.getElementById("circle").style.width="0px";
        document.getElementById("circle").style.height="0px";
    }
}