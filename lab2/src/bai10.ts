var taskPromise = new Promise((resolve, reject) => {
    resolve("Task start...");
})

taskPromise
    .then((data) => console.log(data)
    )
    .catch((error) => console.log(error)
    )
    .finally(() => console.log("done")
    )