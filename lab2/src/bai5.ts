var simulateTask = (time: number) : Promise<String> => {
    return new Promise((resolve) => setTimeout(() => resolve("Task done"), time));
}

simulateTask(5000)
    .then((statusTask) => console.log(statusTask))