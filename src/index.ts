// Simulated asynchronous function using a Promise
// function fetchData(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true; // Toggle to simulate success or failure
//             if (success) {
//                 resolve("Data fetched successfully!");
//             } else {
//                 reject("Failed to fetch data.");
//             }
//         }, 2000); // Simulates 2-second delay
//     });
// }

// // Async function to display data using fetchData
// async function displayData(): Promise<void> {
//     try {
//         console.log("Fetching data...");
//         const data = await fetchData();
//         console.log(data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// Fetch users from an external API
async function fetchUsers(): Promise<any[]> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

// Display users from fetchUsers
async function displayUsers(): Promise<void> {
    try {
        console.log("Fetching users...");
        const users = await fetchUsers();
        console.log("Users fetched successfully:", users);
    } catch (error) {
        console.error("Error displaying users:", error);
    }
}

// // Example using Promise.all to run multiple async tasks
// async function fetchMultipleData(): Promise<void> {
//     try {
//         console.log("Fetching data and users concurrently...");
//         const [dataMessage, users] = await Promise.all([fetchData(), fetchUsers()]);
//         console.log("Results from both operations:");
//         console.log("Message:", dataMessage);
//         console.log("Users:", users);
//     } catch (error) {
//         console.error("Error in concurrent fetch:", error);
//     }
// }

// // Call the asynchronous functions
// displayData();
 displayUsers();
// fetchMultipleData();
