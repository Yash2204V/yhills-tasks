let names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
let speci = names.filter(name => name[0] == 'A');
console.log(speci);

let age = [25, 30, 35];
let specify = age.filter(aged => aged<30);
console.log(specify);

let n = age.length-1;
let sum = 0;
age.forEach(element => {
    sum+=element;
});
// while(n>=0){
//     sum+=age[n];
//     n--;
// }
console.log(sum);


mod1 = names.map(name=> "Hello "+name.toUpperCase()); // created an arrow function 
console.log(mod1);


/* let a = parseFloat(prompt("Enter Num1:"));

// #1 Made the function 
let motu = (a) =>a*2; 

// #2 Take arguments
res = motu(a); 

alert(res);
 */