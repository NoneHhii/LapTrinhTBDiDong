var tmp1 : Promise<String> = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
})

var tmp2 : Promise<number> = new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
})

var tmp3 : Promise<String> = new Promise((resolve, reject) => {
    setTimeout(() => reject("Something went wrong"), 1000);
})

Promise.race([tmp1, tmp2, tmp3])
    .then((data) => console.log(data))
    .catch((error) => console.log(error))