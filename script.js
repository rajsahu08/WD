document.addEventListener("DOMContentLoaded", function () {
    let password = "2602"; // Set your password here
    let userInput = prompt("Enter the password to access this page: Believe me you know it !");

    if (userInput !== password) {
        alert("Incorrect password! Access denied.");
        document.body.innerHTML = ""; // Clear the page content
    }
});
