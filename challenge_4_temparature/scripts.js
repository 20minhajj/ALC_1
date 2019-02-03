//Set global variables;
var i,temp1,temp2,Maxtemp,Mintemp,Steps,tempFarehenhite;
Maxtemp=10;
Mintemp=1;

temp1=parseInt(prompt("Enter temprature one \n"));
temp2=parseInt(prompt("Enter temprature two \n"));

Steps=temp2-temp1;
//console.log("temp2 = "+temp2+" temp1 = "+temp1+"\n");


//funciton Celcius to Farehenhite
 if(temp1<=Mintemp || temp2>=Maxtemp){
     console.log("temp1= "+temp1+"and temp2="+temp2+"\n are out of bonds range should be between 1 ans 10");
 }
 else{
     //console.log(" Range of temp1 "+temp1+ " to "+" temp2 "+ temp2+ " in steps "+Steps+" \n"+rangefinder(temp1,temp2,1)+"\n");
     //Tofarehenhite(temp1);
     console.log("Temperature in From Celcie to farenheit in table format "+" between "+ temp1+" and "+temp2+"\n")
     console.log(Tofarehenhite(temp1));
 }
 /*for(i=0;i<Steps;i++){

 }*/


function Tofarehenhite(temp1){
    var C=temp1*1.8+32;

    console.log("temp in C=>"+temp1+" in F="+C);

    temp1+=1;
   
    if(temp1<=temp2 && temp2!=1){
        
        Tofarehenhite(temp1);
        //console.log("return val=>"+temp1);
        return temp1
    }
    else{
        return;
    }
  


   
}
  

 