
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (username === "sam" && password === "2006") {
        errorMessage.textContent = "All fields are required.";
    } else if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
    } else {
        alert("Login successful!");
        window.location.href = "website.html";
    }
});

// Greeting on Home Page
if (document.getElementById("greeting")) {
    const hours = new Date().getHours();
    const greetingText = hours < 12
        ? "Good Morning! Welcome to My Website"
        : hours < 18
        ? "Good Afternoon! Welcome to My Website"
        : "Good Evening! Welcome to My Website";
    document.getElementById("greeting").textContent = greetingText;
}