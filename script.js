document.addEventListener("DOMContentLoaded", function () {
    let password = "2602"; // Set your password here
    let userInput = prompt("Enter the password to access this page: Believe me You Know it!!");

    if (userInput === password) {
        document.getElementById("content").style.display = "block"; // Show the page
    } else {
        alert("Incorrect password! Access denied.");
        document.body.innerHTML = ""; // Clear everything to prevent access
    }
});
