// Task to be performed!
arr = [1, 2, 3, 4, 5];
function fetchArr(arr, callback) {
  let s = "";
  let sum = 0;
  setTimeout(() => {
    arr.forEach((val) => {
      s += `${val.toString()} `;
      sum += val;
    });
    console.log(`Fetching Data...`);
    console.log(s);
    callback(sum);
  }, 1000);
}

fetchArr(arr, (ans) => {
  console.log(`Processing Data...`);
  console.log(`This is the sum of the array ${ans}.`);
});

// This is Callbacks Function --> Callback Hell / Pyramid of Doom.
/*
let url1 = `https://www.example1.com/`;
let url2 = `https://www.example2.com/`;
let url3 = `https://www.example3.com/`;

function download(url1,callback){
    setTimeout(function(){
        console.log(`Downloading... ${url1}`);
        callback(url1);
    },1000)
}


download(url1,(url)=>{
    console.log(`Processing... ${url}`);
    console.log("");
    download(url2,(url)=>{
        console.log(`Processing... ${url}`);
        console.log("");
        download(url3,(url)=>{
            console.log(`Processing... ${url}`);
            console.log("");
        })
    })
})
*/
