// Array to store the entered name pairs
let names = [];

function storeNames() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const message = document.getElementById("message");
    
    // Clear previous message
    message.textContent = "";

    if (name1 === "" || name2 === "") {
        message.textContent = "Please enter both names.";
        return;
    }

    // Create a pair of names
    const namePair = [name1, name2];
    const reversePair = [name2, name1];

    // Check if the name pair already exists
    let isDuplicate = names.some(pair => 
        (pair[0] === name1 && pair[1] === name2) || 
        (pair[0] === name2 && pair[1] === name1)
    );

    if (isDuplicate) {
        message.textContent = "Error: This pair of names has already been entered.";
    } else {
        // Store the new name pair
        names.push(namePair);
        displayNames();
    }

    // Clear the input fields
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
}

function displayNames() {
    const nameList = document.getElementById("nameList");
    nameList.innerHTML = ""; // Clear previous list

    names.forEach(pair => {
        let listItem = document.createElement("li");
        listItem.textContent = `${pair[0]} & ${pair[1]}`;
        nameList.appendChild(listItem);
    });
}
