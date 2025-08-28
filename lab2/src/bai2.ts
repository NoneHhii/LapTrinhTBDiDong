const promise1 = () : Promise<number> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 1000);
    })
}

promise1().then((number) => console.log(number));