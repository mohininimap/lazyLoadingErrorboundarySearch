// getName();
// console.log(x)
// var x=7;
// function getName(){
//     console.log("Nimap Infotech" );
// }

// output is =>Nimap Infotech
//  *undefined
// ------------------------

// getName();
// console.log(x)
// var x=10;
// function getName(){
//     console.log("Nimap Infotech" );
// }

// ReferenceError: x is not defined

// --------------------
// function getName(){
//     console.log("Nimap Infotech" );
// }

// console.log(getName)
// without calling function we console function then print actual function
// [Function: getName]
// -----------------------------------------

// getName();
// console.log(x)
// var x=7;
// var getName=()=>{
//     console.log("Nimap Infotech" );
// }

//In case of var TypeError: getName is not a function // when arrow function

// ------------------------

// getName();
// console.log(x)
// var x=7;
// const getName=()=>{
//     console.log("Nimap Infotech" ); //Here arrow function just behave like variable
// }

//In case of const ReferenceError: Cannot access 'getName' before initialization

// --------------------------

// getName();
// console.log(x)
// var x=7;
// var getName=function(){ //just like variable undefined
//     console.log("Nimap Infotech" ); //Here arrow function just behave like variable
// }

// --------------------
// var x=1;
// a();
// b();
// console.log(x);

// function a(){
//     var x=10;
//     console.log(x)
// }


// function b(){
//     var x=100;
//     console.log(x)
// }

// // output=>10
// //        100
// //        1
// -------------------

// // function arguement
// function sqr(num){
//     return num*num
// }
// var ans=sqr(4)
// console.log(ans)//ans 16


// =========================
// Swapping colors
// ===================
// let r="red";
// let b="blue";
// console.log(r+" -> "+b)
// let c;
// c=b;
// b=r;
// r=c;
// console.log(r+" -> "+b)

//  ==================================
// Conditional statement If else
//  ==================================

// let hour=25;
// if(hour>=6 && hour <=12){
//     document.write("Hey, Good morning")
// }
// else if(hour>=12 && hour <=18){
//     document.write("Hey ,good afternoon")
// }
// else{
//     document.write("Good ,Evening")
// }

//  ==================================
// Conditional statement switch case
//  ==================================
// note=>If we are not given break then next statement also run
// let role="moderator";
// switch(role){
//     case "guest":
//         document.write("This is guest ...");
//         break;

//     case "moderator":
//         document.write("This is from moderator");
//         break;

//     default:
//         document.write("Unknown User");    
// }


// Above switch program using if else conditon
// let role="guest";
// if(role==="guest"){
//     document.write("This is from guest user ...")
// }
// else if(role==="moderator"){
//     document.write("This is from Moderator user ...")
// }
// else{
//     document.write("This is from unknown user")
// }

// ==============================
// Loops:=>for,while,do while,For in,for of
// ==============================

// for(i=0;i<5;i++){
//     document.write("This is statement" +i +"<br/>")
// }
// ===============================
// odd number with loop
// ===============================

// for(i=0;i<5;i++){
//     if(i%2!==0){
//         document.write("This is statement" +i +"<br/>")
//     }
    
// }

// ====================================
// for loop reverse order odd number
// ====================================

// for(let i=5;i>=1;i--){
//     if(i%2){
//         document.write("number => "+i +"<br/>")
//     }
   
// }

// =========================
// while loop
// =========================

// let i=0;
// while(i<5){
//     document.write(i+"<br/>")
//     i++
// }

// =======================
// Reverse while loop
// =======================

// let i=5;
// while(i>=1){
//   document.write(i + "<br/>")  
//   i--;
// }

// =========================
// Reverse order while loop with even number
// let i=5;
// while(i>=1){
   
//     if(i%2===0){
//         document.write("Number is"+i+"<br/>")
//     }
//     i--;  
// }
// ==========================
// do while loop
// ==========================
// first example with right condition
// let i=0;
// do{
// document.write("Number is"+i+"<br/>")
// i++;
// }while(i<5)

// second example with wrong condition
//In do while condition false still loop runs once
// let i=9;
// do{
// document.write("Number is"+i+"<br/>")
// i++;
// }while(i<5)

// ===============================
// for in loop using object
// ================================
// note=>To iterate over the properties of an object
// const person={
//     name:"Mosh",
//     age:22
// };

// for(let key in person){
//     console.log(key +"-->"+person[i])
// }

// ===============================
// for in loop another example using array
// ================================

// let colors=["red","green","blue"];
// for(let key in colors){
//     console.log(key +"--->"+colors[key])
// }
// ===============================
// note=>continue goes to nex iteration
// break=>break the loop
// let i=0;
// while(i<=10){
//     if(i%2===0){
//         i++;
//         continue;
//     }
//    document.write(i+"<br/>");
//     i++;
// }

// let i=0;
// while(i<10){
//     if(i%2){
//         document.write(i+"<br/>")
//         if(i==7)break;
//     }
//     i++;
    
//     if(i==7){
//         break;
//     }
// }


// =================================
// Exercise ->Take 2 numbers and returns the maximum number

// function maxNumber(a,b){
//     if(a>b){
//         return a
//     }else{
//         return b
//     }
// }

// let nummax=maxNumber(60,40)
// document.write("Maximum numbedr is => "+nummax)
// ===========================
// Exercise another method ->Take 2 numbers and returns the maximum number conditional rendering

// function maxNumber(a,b){
// return (a>b?a:b)
// }

// let maxNum=maxNumber(90,100);
// document.write(maxNum)
