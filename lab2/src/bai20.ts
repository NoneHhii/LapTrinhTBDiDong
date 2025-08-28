interface User {
    id: number,
    name: String,
}

const UserAsc2 : User[] = [
    {
        id: 1,
        name: "Async",
    },
    {
        id: 2,
        name: "await",
    },
    {
        id: 3,
        name: "promise",
    },
]

const fetchUser2 = async (id:number) => {
    const fetchUs = new Promise<User | undefined>(resolve => setTimeout(() => {
        resolve(UserAsc2.find(user => user.id === id));
    }, 3000))

    const timeoutFetch = new Promise((_, reject) => setTimeout(() => reject("Request time out"), 2000));

    const result = await Promise.race([fetchUs, timeoutFetch]);

    if(!result) console.log(`User with ${id} not found`);
    

    return result;
    
}

const fetchUsers1 = async (ids:number[]) => {
    for (const id of ids) {
        try {
            const user = await fetchUser2(id);
            console.log(user);
        } catch (error) {
            console.error(error);
        } 
    }
}

fetchUsers1([2, 3, 1]);