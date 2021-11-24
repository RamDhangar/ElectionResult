let bjp=document.getElementById("bjp");
let congress=document.getElementById("congrass");
let aap=document.getElementById("aap");
let bjpResult=0;
let congressResult=0;
let appResult=0;
bjp.addEventListener("click", function(e){
    let bool=confirm("Are sure you wnat to vote for BJP")
    if(bool){
    bjpResult++;
    }
    console.log(bjpResult);
});
congress.addEventListener("click", function(){
    let bool=confirm("Are sure you wnat to vote for BJP")
    if(bool)
    congressResult++;
    
   console.log(congressResult);
   });
aap.addEventListener("click", function(){
    let bool=confirm("Are sure you wnat to vote for BJP")
    if(bool)
    appResult++;
    
   console.log(appResult)
   });

let showResult=document.getElementById("showResult");
showResult.addEventListener("click",function(){
    document.getElementById("bjpre").innerHTML='BJP Vote is <br><h2>'+bjpResult+'</h2>';
    document.getElementById("congrassre").innerHTML='Congress Vote is <br><h2> '+congressResult+'</h2>';
    document.getElementById("aapre").innerHTML='AAP Vote is<br> <h2>'+appResult+'</h2>';
    let sr= document.getElementById("winResult");
    if(bjpResult==congressResult && bjpResult==appResult){
        sr.innerHTML='No one win Election';
    }
    else if(bjpResult> congressResult && bjpResult > appResult) {
        sr.innerHTML='BJP win The Election';
      }
    else if (congressResult > bjpResult && congressResult > appResult) {
        sr.innerHTML='Congress win The Election';
      }
    else if(appResult>bjpResult && appResult>congressResult) {
        sr.innerHTML='AAP win The Election';
      }
    
})