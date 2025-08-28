const rejPromise = () : Promise<String> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("Something went wrong"), 1000);
    })
}

rejPromise()
    .then((data) => console.log(data))
    .catch((error) => console.log(error))