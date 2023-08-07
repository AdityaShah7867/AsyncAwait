async function harry(){
let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("data1")
    },1000)
})

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("data2")
    },2000)
})

p1.then(alert)
p2.then(alert)

}
console.log("Welcome to data room")
harry();