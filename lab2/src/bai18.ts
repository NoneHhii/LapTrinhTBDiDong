interface User {
    id: number,
    name: String,
}

const UserAsc : User[] = [
    {
        id: 1,
        name: "Async",
    },
    {
        id: 2,
        name: "await",
    },
]

const fetchUser = async (id:number) => {
    const user = await new Promise<User | undefined>(resolve => setTimeout(() => {
        resolve(UserAsc.find(user => user.id === id));
    }, 1000))

    console.log(user?.name);
    
}

fetchUser(2);