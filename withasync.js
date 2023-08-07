async function datacenter() {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data1");
    }, 1000);
  });

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data2");
    }, 6000);
  });

  let first = await p1;
  let second = await p2;
  return [first, second];
}

console.log("Welcome to data room");
let a = datacenter();
console.log(a);
