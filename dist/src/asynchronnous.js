"use strict";
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Failed to fetch data.");
            }
        }, 2000);
    });
}
async function displayData() {
    try {
        console.log("Fetching data...");
        const data = await fetchData();
        console.log(data);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
displayData();
async function fetchMultipleData() {
    const fetch1 = fetchData();
    const fetch2 = fetchData();
    const fetch3 = fetchData();
    try {
        const results = await Promise.all([fetch1, fetch2, fetch3]);
        console.log("All data fetched:", results);
    }
    catch (error) {
        console.error("Error fetching multiple data:", error);
    }
}
fetchMultipleData();
