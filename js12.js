//if else

let km = 19.5;
let totalprice = 0;

for (let i = 1; i <= km; i += 0.5) {
    if (i <= 4) {
        totalprice += 30 / 4 * 0.5;   
    } else if (i <= 9) {
        totalprice += 10 / 5 * 0.5;   
    } else if (i <= 19) {
        totalprice += 15 / 10 * 0.5;  
    } else {
        totalprice += 20 * 0.5;       
    }
}

console.log(totalprice.toFixed(2)+"rs");

//loops

//while
let i = 0;
while(i < 5){
    console.log("Hello, World!");
    i++;
}

let num=1;
while(num <= 10){
    console.log("5 x " + num + " = " + (5 * num));
    num++;
}

//do while

let j=0;
do{
    console.log("Hello, World!");
    j++;
}while(j<5);

//dom manipulation

