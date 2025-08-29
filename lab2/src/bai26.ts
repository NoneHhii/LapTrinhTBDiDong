const wait = async() => {
    console.log("Loading...");
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Game start");
    
}

wait();