interface User {
    id: number,
    name: String,
}

const UserAsc1 : User[] = [
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

const fetchUser1 = async (id:number) => {
    const user = new Promise<User | undefined>(resolve => setTimeout(() => {
        resolve(UserAsc1.find(user => user.id === id));
    }, 1000));
    return user;
    
}

const fetchUsers = async (ids:number[]) => {
    for (const id of ids) {
        try {
            const user = await fetchUser1(id);
            console.log(user);
        } catch (error) {
            console.error(error);
        } 
    }
}

fetchUsers([2, 3, 1]);