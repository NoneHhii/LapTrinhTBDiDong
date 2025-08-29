import axios from "axios";

async function fetchsUser(url: string) {
    return axios.get(url).then(res => res.data);
    
}

async function fetchTest() {
    const fetchs = [
        fetchsUser("https://jsonplaceholder.typicode.com/todos/1"),
        fetchsUser("https://jsonplaceholder.typicode.com/todos/invalid"),
        fetchsUser("https://jsonplaceholder.typicode.com/todos/2"),
    ]

    const result = await Promise.allSettled(fetchs);

    result.forEach((res, idx) => {
        if(res.status === "fulfilled") console.log(`API ${idx}: `, res.value);
        else console.log(`API ${idx} is failure ${res.reason.message}`);
        
    })
}

fetchTest();