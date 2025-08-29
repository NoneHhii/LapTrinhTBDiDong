import axios from "axios";

interface Todo {
    userId: number,
    id: number,
    title: String,
    completed: boolean,
}

async function fetchTodo() {
    const res = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");

    const taskDone = res.data.filter(task => task.completed);

    return taskDone.slice(0, 5);
}

(async () => {
    const complete = await fetchTodo();
    console.log(complete);
    
}) ()