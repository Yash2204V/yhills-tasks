// There are so many types of promises that we are going to learn.

// #1 Promise.all()

// [puri array of promises pesh hooooo jab sare RESOLVED HAI!] all the promises are printed in the array manner when all the promises are resolved but when even one promise is rejected, the error occur and .catch get executed. 

// var p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("Resolved Promise 1...")
//         res(10);
//     },1000)
// })
// var p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("Resolved Promise 2...")
//         res(20);
//         // console.log("Rejected Promise 2...")
//         // rej("Error!");
//     },2000)
// })
// var p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("Resolved Promise 3...")
//         res(30);
//     },3000)
// })

// Promise.all([p1,p2,p3]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// #2 Promise.race()

// [Jo race mai jeeta uska data --> pesh hooooooo!] race don't care about the error --> agar vo promise ke jeet gya hai toh :) , It doesn't give a heck about whether there is error below it or not. 
/* var p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("Resolved Promise 1...")
        res(10);
    },5000)
})
var p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        // console.log("Resolved Promise 2...")
        // res(20);
        console.log("Rejected Promise 2...")
        rej("Error!");
    },2000)
})
var p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("Resolved Promise 3...")
        res(30);
    },3000)
})

Promise.race([p1,p2,p3]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}) */


// #3 Promise.any()

// You can checkout the NOTION for more clarity!
// Jo sbse pahale jeetega aur vo RESOLVED MAI ATA HAI uska data print hoga. Other than that agar sb REJECTED hai tabhi error ayega!
/* 
var p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        // console.log("Resolved Promise 1...")
        // res(10);
        console.log("Rejected Promise 1...")
        rej("Error!");
    },5000)
})
var p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("Resolved Promise 2...")
        res(20);
        // console.log("Rejected Promise 2...")
        // rej("Error!");
    },2000)
})
var p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        // console.log("Resolved Promise 3...")
        // res(30);
        console.log("Rejected Promise 3...")
        rej("Error!");
    },3000)
})

Promise.any([p1,p2,p3]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
 */

// #4  Promise.allSettled()
// Mudde ke baatein in a neat clear manner.

/* var p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        // console.log("Resolved Promise 1...")
        // res(10);
        console.log("Rejected Promise 1...")
        rej("Error!");
    },5000)
})
var p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("Resolved Promise 2...")
        res(20);
        // console.log("Rejected Promise 2...")
        // rej("Error!");
    },2000)
})
var p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        // console.log("Resolved Promise 3...")
        // res(30);
        console.log("Rejected Promise 3...")
        rej("Error!");
    },3000)
})

Promise.allSettled([p1,p2,p3]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}) */

// --------------------------------------------------------------------------------------
/* var a = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(10);
    },1000)
})
a.then((data)=>{
    console.log(data); //10
    return data*2;
})
.then((data)=>{
    console.log(data); //20
    return data*3;
})
.then((data)=>{
    console.log(data); // 60
    return data*4;
})
.then((data)=>{
    console.log(data); // 240
    return data;
})
 */

/* let success = false;
function fetchData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            data = [1,2,3,4,5];
            if(success == true){
                return res(`${data}`);
            }

            else{
                return rej("Here is the error!")
            }
        },1000)
    })
}
fetchData().then((data)=>{
    console.log(`The thing is executed successfully [${data}]`);
})
.catch((err)=>{
    console.log(`Execution failed! ${err}`);
})
.finally(()=>{
    console.log("Done!");
})
 */