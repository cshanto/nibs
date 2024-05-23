// script.js

// Function to calculate score
function calculateScore() {
    var firstNameNibba = document.getElementById("firstNameNibba").value;
    var lastNameNibba = document.getElementById("lastNameNibba").value;
    var firstNameNibbi = document.getElementById("firstNameNibbi").value;
    var lastNameNibbi = document.getElementById("lastNameNibbi").value;

    // Check if the input values match the specific names
    if ((firstNameNibba.toLowerCase() === "sushanta" || lastNameNibba.toLowerCase() === "sushanta") ||
        (firstNameNibbi.toLowerCase() === "sushanta" || lastNameNibbi.toLowerCase() === "sushanta") ||
        (firstNameNibba.toLowerCase() === "sushanth" || lastNameNibba.toLowerCase() === "sushanta") ||
        (firstNameNibbi.toLowerCase() === "sushanth" || lastNameNibbi.toLowerCase() === "sushanta")) {

        // If they match, disable the input fields
        document.getElementById("firstNameNibba").disabled = true;
        document.getElementById("lastNameNibba").disabled = true;
        document.getElementById("firstNameNibbi").disabled = true;
        document.getElementById("lastNameNibbi").disabled = true;

        // Display a message indicating that inputs are disabled
        document.getElementById("score").innerHTML = "AAH AAH AAAH !, not this name 🤣.";
        document.getElementById("rank").innerHTML = "";
        document.getElementById("score").style.color = "gray";

setTimeout(() => {
  location.reload()
}, 3000)
        return;
    } else {
        // If different names are entered, re-enable the input fields
        document.getElementById("firstNameNibba").disabled = false;
        document.getElementById("lastNameNibba").disabled = false;
        document.getElementById("firstNameNibbi").disabled = false;
        document.getElementById("lastNameNibbi").disabled = false;

        // Clear the disabled message
        document.getElementById("score").innerHTML = "";
        document.getElementById("score").style.color = ""; // Reset text color
    }

    // If the names don't match, continue calculating the score
    var scoreNibba = generateRandomScore(firstNameNibba, lastNameNibba);
    var scoreNibbi = generateRandomScore(firstNameNibbi, lastNameNibbi);

    var averageScore = (scoreNibba + scoreNibbi) / 2;

    var result = "Compatibility Score: " + averageScore.toFixed(2) + " %";
    document.getElementById("score").innerHTML = result;

    // Set color based on score
    if (averageScore < 50) {
        document.getElementById("score").style.color = "red";
    } else {
        document.getElementById("score").style.color = "green";
    }

    var rank = determineRank(averageScore);
    document.getElementById("rank").innerHTML = "Rank: " + rank;
}

// Function to generate random score
function generateRandomScore(firstName, lastName) {
    // Generate a random number between 1 and 100 (inclusive)
    var randomScore = Math.floor(Math.random() * 100) + 1;
    return firstName.length * lastName.length * randomScore;
}

// Function to determine rank
function determineRank(score) {
    if (score >= 2000) {
        return "SUPER CROWN, CHAPRI TIME XD";
    } else if (score >= 1000) {
        return "CROWN";
    } else if (score >= 500) {
        return "GOLD";
    }else if(score >= 100){
        return "SILVER";
    }else {
        return "PLASTIC";
    }
}

// Add event listeners to input fields to enable them when clicked
document.getElementById("firstNameNibba").addEventListener("click", enableInputField);
document.getElementById("lastNameNibba").addEventListener("click", enableInputField);
document.getElementById("firstNameNibbi").addEventListener("click", enableInputField);
document.getElementById("lastNameNibbi").addEventListener("click", enableInputField);

// Function to enable input field
function enableInputField() {
    if (this.disabled) {
        this.disabled = false;
        document.getElementById("score").innerHTML = "";
        document.getElementById("score").style.color = "";
        document.getElementById("rank").innerHTML = "";
    }
}





// function calculateScore() {
//     var firstNameNibba = document.getElementById("firstNameNibba").value;
//     var lastNameNibba = document.getElementById("lastNameNibba").value;
//     var firstNameNibbi = document.getElementById("firstNameNibbi").value;
//     var lastNameNibbi = document.getElementById("lastNameNibbi").value;

//     // Check if the input values match the specific names
//     if ((firstNameNibba.toLowerCase() === "sushanta" || lastNameNibba.toLowerCase() === "chakma") ||
//         (firstNameNibbi.toLowerCase() === "sushanta" || lastNameNibbi.toLowerCase() === "chakma") ||
//         (firstNameNibba.toLowerCase() === "sushanth" || lastNameNibba.toLowerCase() === "chakma") ||
//         (firstNameNibbi.toLowerCase() === "sushanth" || lastNameNibbi.toLowerCase() === "chakma")) {

//         // If they match, disable the input fields
//         document.getElementById("firstNameNibba").disabled = true;
//         document.getElementById("lastNameNibba").disabled = true;
//         document.getElementById("firstNameNibbi").disabled = true;
//         document.getElementById("lastNameNibbi").disabled = true;

//         // Display a message indicating that inputs are disabled
//         document.getElementById("score").innerHTML = "AAH AAH AAAH !, not this name 🤣.";
//         document.getElementById("rank").innerHTML = "";
//         document.getElementById("score").style.color = "gray";
//         return;
//     } else {
//         // If different names are entered, re-enable the input fields
//         document.getElementById("firstNameNibba").disabled = false;
//         document.getElementById("lastNameNibba").disabled = false;
//         document.getElementById("firstNameNibbi").disabled = false;
//         document.getElementById("lastNameNibbi").disabled = false;

//         // Clear the disabled message
//         document.getElementById("score").innerHTML = "";
//         document.getElementById("score").style.color = ""; // Reset text color
//     }

//     // If the names don't match, continue calculating the score
//     var scoreNibba = generateRandomScore(firstNameNibba, lastNameNibba);
//     var scoreNibbi = generateRandomScore(firstNameNibbi, lastNameNibbi);

//     var averageScore = (scoreNibba + scoreNibbi) / 2;

//     var result = "Compatibility Score: " + averageScore.toFixed(2) + " %";
//     document.getElementById("score").innerHTML = result;

//     // Set color based on score
//     if (averageScore < 50) {
//         document.getElementById("score").style.color = "red";
//     } else {
//         document.getElementById("score").style.color = "green";
//     }

//     var rank = determineRank(averageScore);
//     document.getElementById("rank").innerHTML = "Rank: " + rank;
// }

// function generateRandomScore(firstName, lastName) {
//     // Generate a random number between 1 and 100 (inclusive)
//     var randomScore = Math.floor(Math.random() * 100) + 1;
//     return firstName.length * lastName.length * randomScore;
// }

// function determineRank(score) {
//     if (score >= 90) {
//         return "Diamond";
//     } else if (score >= 70) {
//         return "Gold";
//     } else if (score >= 50) {
//         return "Silver";
//     } else {
//         return "Bronze";
//     }
// }
