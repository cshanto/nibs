function calculateScore() {
    var firstNameNibba = document.getElementById("firstNameNibba").value;
    var lastNameNibba = document.getElementById("lastNameNibba").value;
    var firstNameNibbi = document.getElementById("firstNameNibbi").value;
    var lastNameNibbi = document.getElementById("lastNameNibbi").value;
    
    // Check if the input values match the specific names
    if ((firstNameNibba.toLowerCase() === "sushanta" && lastNameNibba.toLowerCase() === "chakma") ||
        (firstNameNibbi.toLowerCase() === "sushanta" && lastNameNibbi.toLowerCase() === "chakma") ||
        (firstNameNibba.toLowerCase() === "sushanth" && lastNameNibba.toLowerCase() === "chakma") ||
        (firstNameNibbi.toLowerCase() === "sushanth" && lastNameNibbi.toLowerCase() === "chakma")) {
        
        // If they match, disable the input fields
        document.getElementById("firstNameNibba").disabled = true;
        document.getElementById("lastNameNibba").disabled = true;
        document.getElementById("firstNameNibbi").disabled = true;
        document.getElementById("lastNameNibbi").disabled = true;
        
        // Display a message indicating that inputs are disabled
        document.getElementById("score").innerHTML = "Inputs disabled for specified names.";
        document.getElementById("rank").innerHTML = "";
        document.getElementById("score").style.color = "gray";
        return;
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
