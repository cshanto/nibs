function calculateScore() {
    var firstNameNibba = document.getElementById("firstNameNibba").value;
    var lastNameNibba = document.getElementById("lastNameNibba").value;
    var firstNameNibbi = document.getElementById("firstNameNibbi").value;
    var lastNameNibbi = document.getElementById("lastNameNibbi").value;
    
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

function generateRandomScore(firstName, lastName) {
    // Generate a random number between 1 and 100 (inclusive)
    var randomScore = Math.floor(Math.random() * 100) + 1;
    return firstName.length * lastName.length * randomScore;
}

function determineRank(score) {
    if (score >= 90) {
        return "Diamond";
    } else if (score >= 70) {
        return "Gold";
    } else if (score >= 50) {
        return "Silver";
    } else {
        return "Bronze";
    }
}
