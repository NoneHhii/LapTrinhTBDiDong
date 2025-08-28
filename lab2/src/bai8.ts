var chainPromise = new Promise<number>((resolve, reject) => {
    resolve(2**2);
})

chainPromise
    .then((number) => {return number * number})
    .then((number) => {return number + 5})
    .then((number) => console.log(number)
    )