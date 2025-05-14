"use strict";
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        return users;
    }
    catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}
async function displayUsers() {
    try {
        console.log("Fetching users...");
        const users = await fetchUsers();
        console.log("Users fetched successfully:", users);
    }
    catch (error) {
        console.error("Error displaying users:", error);
    }
}
displayUsers();
