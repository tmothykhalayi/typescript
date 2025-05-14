// Demonstrating asynchronous concepts in TypeScript

// A function that simulates an asynchronous operation using a Promise
function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate success or failure
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000); // Simulate a 2-second delay
    });
}

// Using async/await to handle asynchronous operations
async function displayData() {
    try {
        console.log("Fetching data...");
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Calling the asynchronous function
displayData();

// Example of using Promise.all to handle multiple asynchronous operations
async function fetchMultipleData() {
    const fetch1 = fetchData();
    const fetch2 = fetchData();
    const fetch3 = fetchData();

    try {
        const results = await Promise.all([fetch1, fetch2, fetch3]);
        console.log("All data fetched:", results);
    } catch (error) {
        console.error("Error fetching multiple data:", error);
    }
}

// Calling the function to fetch multiple data
fetchMultipleData();