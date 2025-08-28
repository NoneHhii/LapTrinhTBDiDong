"use strict";
const UserAsc = [
    {
        id: 1,
        name: "Async",
    },
    {
        id: 2,
        name: "await",
    },
];
const fetchUser = async (id) => {
    const user = await new Promise(resolve => setTimeout(() => {
        resolve(UserAsc.find(user => user.id === id));
    }, 1000));
    console.log(user === null || user === void 0 ? void 0 : user.name);
};
fetchUser(2);
