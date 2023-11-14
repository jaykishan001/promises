// async function getData(){
//     return "jaykishan"
// }

// const data = getData();
// data.then(function(res){
//     console.log(res);
// })

const p = new Promise ((resolve, reject)=> {
    setTimeout(function () {
        resolve("this promise is resolved")
        
    },5000)
})

// async function promiseHandler() {
//     const value =  await p;
//     console.log(value);
// }

// async function getData () {
//     // p.then(function(value){
//     //    console.log(value);
//     // })
//     const data =  await p;
//     console.log(data)
    
//     console.log("you are doing good")
// }

// getData();


// function print (){
//     console.log("hello js")
// }

// print ();
// promiseHandler();


const GITHUB_API = "https://api.github.com/users/akshaymarch7"

async function github() {
   
    const val = await fetch(GITHUB_API);
    
    const data  = await val.json();

    console.log(data);
    

}

github();