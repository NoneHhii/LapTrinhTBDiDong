import axios from "axios";

async function fetchUser() {
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

    console.log(data.data);
    
}

(async () => {
    await fetchUser();
    await fetchUser();
    await fetchUser();
}) ();