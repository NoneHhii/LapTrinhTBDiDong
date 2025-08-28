var numberAsc = async (num:number) => {
    const result : number = await new Promise(resolve => setTimeout(() => resolve(num*3), 1000));
    console.log(result);
    
}

numberAsc(4);