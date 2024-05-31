// Ques: Print even and odd for the nos. from 1 to 30 & skip no. divisible by 10.

let start = 1;
let end = 30;

for(let i = start; i<=end; i++){
    if(i%10 == 0){
        continue;
    }
    if(i%2 == 0){
        console.log(i,"even");
    }else{
        console.log(i,"odd");
    }
}
