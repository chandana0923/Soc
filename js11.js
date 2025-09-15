console.log("SRIT");

//num=20;
//str="hello";
//bol=true;
//bigint=498576763890;
age=20;
console.log(age);

//function

function generateWelcomeMessage(name){
    return "Welcome, " + name + "!";
}
let welcome_message=generateWelcomeMessage("SRIT");
console.log(welcome_message)
 
// operators

let addage=age+5;
console.log(addage);
let subage=age-5;
console.log(subage);
let mulage=age*5;
console.log(mulage);
let divage=age/5;
console.log(divage);
length=10;
breadth=20;
area=length*breadth;
console.log("area of rectangle : ",area)

//factorial
function factorial(n){
    if(n<0)return undefined
    let result=1;
    for(let i=1;i<=n;i++){
        result*=i;
    }
    return result;
}
let fact=factorial(5);
console.log("factorial of 5 is : ",fact);

//calculator

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0){   
        return "Error: Division by zero";
    }
    return a/b;
}
let num1=Number(prompt("Enter first number: "));
let num2=Number(prompt("Enter second number: "));
console.log("Addition: ",add(num1,num2));
console.log("Subtraction: ",subtract(num1,num2));
console.log("Multiplication: ",multiply(num1,num2));
console.log("Division: ",divide(num1,num2));

//compound interest
function compoundInterest(principal, rate, time, n) {
    let r=rate/100;
    let amount = principal * Math.pow((1 + r / n), n * time);
    return amount;
}
let principal=Number(prompt("Enter principal amount: "));
let rate=Number(prompt("Enter rate of interest: "));
let time=Number(prompt("Enter time in years: "));
let n= Number(prompt("Enter number of times : "));
let amount=compoundInterest(principal,rate,time,n);
console.log("Compound Interest: ",amount);

//if condition 

if(age>=18){
    console.log("You are eligible to vote.");
}
else{
    console.log("You are not eligible to vote.");
}

//grading

let marks=90;
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=80){
    console.log("Grade B");
}
else if(marks>=70){
    console.log("Grade C");
}
else if(marks>=60){
    console.log("Grade D");
}
else{
    console.log("Grade F");
}

console.log("Marks: ",marks);


