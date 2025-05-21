// Function to count the number of each flavor
function countYogurtFlavors(flavors) {
    let flavorCount = {};
    for (let i = 0; i < flavors.length; i++) {
        let flavor = flavors[i].trim().toLowerCase(); // normalize input
        if (flavorCount[flavor]) {
            flavorCount[flavor]++;
        } else {
            flavorCount[flavor] = 1;
        }
    }
    return flavorCount;
}

// Prompt the user to input yogurt flavors
let userInput = prompt("Enter your yogurt flavors (e.g. vanilla, chocolate, coffee):");

// Split the input into an array
let flavorsArray = userInput.split(",");

// Count the flavors
let yogurtFlavorCounts = countYogurtFlavors(flavorsArray);

// Display the result
let result = "";
for (let flavor in yogurtFlavorCounts) {
    result += `${flavor}: ${yogurtFlavorCounts[flavor]} times\n`;
}

console.log("JavaScript is connected");
console.log("Yogurt flavor counts:\n" + result);
