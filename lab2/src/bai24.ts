import axios from "axios";

interface Todo {
    userId: number,
    id: number,
    title: String,
    completed: boolean,
}

async function postData(data:Omit<Todo, "id">) {
    try {
        const res = await axios.post("https://jsonplaceholder.typicode.com/todos", data);
        console.log(res.data);
        
    } catch (error) {
        console.log(error);
        
    }
}

(async () => {
    await postData({
        userId: 1,
        title: "Push up 1000 times",
        completed: false,
    })
}) ()