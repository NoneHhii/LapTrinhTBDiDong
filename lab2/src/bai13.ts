var ascTryCatch = async () => {
    try {
        const data = await new Promise((resolve, reject) => reject("Something went wrong"));
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}

ascTryCatch();