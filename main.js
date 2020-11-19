let alphabet = ["A","B","C","D","E","F","G","H"];
let number = ["1","2","3","4","5","6","7","8"];

var indexone;
var indextwo;
var indexthree;
var indexfour;

let result = document.getElementById("resultdiv");

 function king() {

let letterone = document.getElementById("initialalp").value;
 let lettertwo = document.getElementById("finalalp").value;
  let numberone = document.getElementById("initialnum").value;
  
 let numbertwo = document.getElementById("finalnum").value;

indexone = (alphabet.indexOf(letterone));
  indextwo = (number.indexOf(numberone));

indexthree =  (alphabet.indexOf(lettertwo));
 indexfour = (number.indexOf(numbertwo));



if((((indexthree==(indexone+1))||(indexthree==(indexone-1)))&&(indextwo==indexfour))) {
  result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is CORRECT MOVE`;
  console.log("move");
} else if((((indexfour==(indextwo+1))||(indexfour==(indextwo-1)))&&(indexone==indexthree))) {
   result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is CORRECT MOVE`;
  console.log("move");
}
else if(((indexthree==(indexone+1))||(indexthree==(indexone-1)))&&((indexfour==(indextwo-1))||(indexfour==(indextwo+1)))){
  result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is CORRECT MOVE`;
  console.log("move"); 
}

else{
   result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is WORNG MOVE`;
  console.log("not move");
}



}


 

function queen() {
let letterone = document.getElementById("initialalp").value;
 let lettertwo = document.getElementById("finalalp").value;
  let numberone = document.getElementById("initialnum").value;
  
 let numbertwo = document.getElementById("finalnum").value;

indexone = (alphabet.indexOf(letterone));
  indextwo = (number.indexOf(numberone));

indexthree =  (alphabet.indexOf(lettertwo));
 indexfour = (number.indexOf(numbertwo));


if ((indexfour == indextwo) ||(indexone == indexthree)) {
result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is CORRECT MOVE`;
  console.log("move");
}else if ((indexone-indexthree)==(indexfour-indextwo)) {
  result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is CORRECT MOVE`;
  console.log("move");
} 
else if((indexone-indexthree)==(indextwo-indexfour)){
  result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is CORRECT MOVE`;
  console.log("move");
}


else {
result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is WORNG MOVE`;
  console.log("not move");
}
}

function knights() {
let letterone = document.getElementById("initialalp").value;
 let lettertwo = document.getElementById("finalalp").value;
  let numberone = document.getElementById("initialnum").value;
  
 let numbertwo = document.getElementById("finalnum").value;

indexone = (alphabet.indexOf(letterone));
  indextwo = (number.indexOf(numberone));

indexthree =  (alphabet.indexOf(lettertwo));
 indexfour = (number.indexOf(numbertwo));




if (((indexthree==indexone-1)||(indexthree==indexone+1))&&((indexfour==indextwo-2)||(indexfour==indextwo+2))) {
    result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is CORRECT MOVE`;
  console.log("move");
} 
else if (((indexthree==indexone-2)||(indexthree==indexone+2))&&((indexfour==indextwo-1)||(indexfour==indextwo+1))){
   result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is CORRECT MOVE`;
  console.log("move");
}
else{
    result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is WRONG MOVE`;
  console.log("not move");
}
}

function bishop() {

let letterone = document.getElementById("initialalp").value;
 let lettertwo = document.getElementById("finalalp").value;
  let numberone = document.getElementById("initialnum").value;
  
 let numbertwo = document.getElementById("finalnum").value;

indexone = (alphabet.indexOf(letterone));
  indextwo = (number.indexOf(numberone));

indexthree =  (alphabet.indexOf(lettertwo));
 indexfour = (number.indexOf(numbertwo));




if ((indexone-indexthree)==(indexfour-indextwo)) {
  result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is CORRECT MOVE`;
  console.log("move");
} 
else if((indexone-indexthree)==(indextwo-indexfour)){
  result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is CORRECT MOVE`;
  console.log("move");
}
else {
  result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is WORNG MOVE`;
  console.log("not move");
}
}

function rook() {

let letterone = document.getElementById("initialalp").value;
 let lettertwo = document.getElementById("finalalp").value;
  let numberone = document.getElementById("initialnum").value;
  
 let numbertwo = document.getElementById("finalnum").value;

indexone = (alphabet.indexOf(letterone));
  indextwo = (number.indexOf(numberone));

indexthree =  (alphabet.indexOf(lettertwo));
 indexfour = (number.indexOf(numbertwo));




if ((indexfour == indextwo)||(indexone == indexthree)) {
  result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is CORRECT MOVE`;
  console.log("move");
} else {
  result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is WORNG MOVE`;
  console.log("not move");
}
 
}
function pawn() {

let letterone = document.getElementById("initialalp").value;
 let lettertwo = document.getElementById("finalalp").value;
  let numberone = document.getElementById("initialnum").value;
  
 let numbertwo = document.getElementById("finalnum").value;

indexone = (alphabet.indexOf(letterone));
  indextwo = (number.indexOf(numberone));

indexthree =  (alphabet.indexOf(lettertwo));
 indexfour = (number.indexOf(numbertwo));






if ((indexfour == (indextwo + 1))&&(indexone == indexthree)) {
  result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is CORRECT MOVE`;
  console.log("move");
} else {
  result.innerText =` The move from ${letterone + numberone} to ${lettertwo + numbertwo} is WORNG MOVE`;
  console.log("not move");
}

}