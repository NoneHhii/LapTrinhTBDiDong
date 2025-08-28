var simulateTask = (time: number) : Promise<String> => {
    return new Promise((resolve) => setTimeout(() => resolve("Task done"), time));
}

var task = async () => {
    const data : String = await simulateTask(2000);
    console.log(data);
    
}

task();