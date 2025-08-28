"use strict";
const UserAsc1 = [
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
];
const fetchUser1 = async (id) => {
    const user = new Promise(resolve => setTimeout(() => {
        resolve(UserAsc1.find(user => user.id === id));
    }, 1000));
    return user;
};
const fetchUsers = async (ids) => {
    for (const id of ids) {
        try {
            const user = await fetchUser1(id);
            console.log(user);
        }
        catch (error) {
            console.error(error);
        }
    }
};
fetchUsers([2, 3, 1]);
