import axios, {AxiosResponse} from "axios";

// "https://jsonplaceholder.typicode.com/todos"

async function fetchWithRetry<T>(url : string, retries: number) : Promise<T | null> {

    try {
        const res : AxiosResponse<T> = await axios.get(url);
        return res.data;
    } catch (error) {
        if(retries <= 0) {
            console.log("All retries fail: " + error);
            return null;
        };
        
        console.log(`request fail. retries...(${retries} time)`);
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        return fetchWithRetry(url, retries - 1);
    }
}

(async () => {
    fetchWithRetry("https://jsonplaceholder.typicode.com/todo", 2);
}) ()