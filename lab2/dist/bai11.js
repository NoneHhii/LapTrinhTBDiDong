"use strict";
const exs1 = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Hello Async");
};
exs1();
