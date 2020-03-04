/*Promises 
A promises is an object that may produce a single value some time in the future


*/

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve(console.log("it worked"));
  } else {
    reject("it broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve => {
    console.log("2");
  }, 3000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve => {
    console.log("3");
  }, 3500);
});
// promise
//   .then(result => result + "!")
//   .then(result2 => {
//     throw Error; // Error planted :)
//     console.log(result2);
//   })
//   .catch(console.log('error')); // .catch catches errors no matter where in the code
// We can use some more .then since .catch works for everything BEFORE it

// Promise all to rule them all!!!
Promise.all([promise, promise2, promise3]);

// Real life applicatin
/* Promises are realy useful when it comes to fetching some data from API
 becouse they comes out as a resolve, reject or pending so there is no possible way to get partialy functional app. ALl or nothing*/

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

Promise.all(
  urls.map(url => {
    return fetch(url).then(resp => resp.json());
  })
)
  .then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error"));
