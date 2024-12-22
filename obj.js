//document.write("Monday");
console.log("im in javascript");
console.log(document.getElementById("text-div"));


console.log
const tagName=(document.getElementsByTagName("p"));
//spread operators
console.log(tagName);

const tag=[...tagName];
console.log(tag[1]);
 const names=document.getElementsByClassName("text-para");
 console.log(names);

//selectors
//quarySelector

   const textDiv =document.querySelector("#text-div"); 
   console.log(textDiv);
   const con=document.querySelector(".content");
   console.log(con);
        
   const nav=document .querySelector(".navabar");
   console.log(nav);
      
   const lis=document.querySelectorAll(".navabar li");
   console.log(lis);
   const n=document.querySelector(".navabar li:nth-child(3)");
   console.log(n);
   
   
   

try{
    const Userid=document.getElementById("text-div");
    if(!Userid){
        document.write("USER ID IS WENT WRONG PLEASE TRY AGAIN.....");
    }
    else{
     document.write("OPPS WENT WRONG");
     }
}
 catch{
     ErrorEvent("PLEASE CHECK YOUR CEDENTIALS AND TRY ONCE AGAIN");
 }