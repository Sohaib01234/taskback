 let x = 10; 

function soh ()
{
    let x = 20 ; 
    console.log(x) }
 soh()  //output => 20 local Scope;

 ///////


 let y = 10; 

function soh ()
{
    console.log(y)
}
soh()  //10 Global Scope

////////
var z = 17; 
function soh ()
{
var z = 50 ;
console.log(z)
}

soh()  //50 Local Group

////////

let a = 15; 

function soh (){
    
console.log(a)
}
soh() // 15 Global Group


