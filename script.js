// Sample user data with security questions and answers
var usersData = {
    "me": {
        "password": "me123",
        "securityQuestion": "What is your favorite color?",
        "securityAnswer": "blue"
    },
    "orpa": {
        "password": "orpa456",
        "securityQuestion": "What is your pet's name?",
        "securityAnswer": "fluffy"
    },
    "amici": {
        "password": "amici789",
        "securityQuestion": "What is your mother's maiden name?",
        "securityAnswer": "smith"
    },
    "rifat": {
        "password":"motu", 
        "securityQuestion": "What is your girlfriend's name?",
        "securityAnswer": "ankhi"
    }
    // Add more users as needed
};

// Predefined passwords with URLs
var passwords = {
    "me123": "https://example.com/me123",
    "orpa456": "https://example.com/orpa456",
    "amici789": "https://example.com/amici789",
    "motu":"https://rifatuzzaman.netlify.app/"
    // Add more passwords and URLs as needed
};

// Function to validate login credentials
function validatePassword() {
    var username = document.getElementById("usa").value.toLowerCase(); // Convert username to lowercase
    var password = document.getElementById("pas").value;
    var rememberMe = document.getElementById("remember").checked;

    if (username in usersData && usersData[username].password === password) {
        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        }
        window.location.href = passwords[password];
        return false;
    } else {
        alert("Incorrect username or password. Please try again.");
        return false;
    }
}

// Function to show forgot password modal
function showForgotPasswordModal() {
    var modal = document.getElementById("forgotPasswordModal");
    var username = prompt("Please enter your username:").toLowerCase(); // Convert username to lowercase

    if (username in usersData) {
        var question = usersData[username].securityQuestion;
        document.getElementById("securityQuestion").innerText = question;
        document.getElementById("forgotUsername").value = username;
        modal.style.display = "flex";
    } else {
        alert("Username not found. Please try again.");
    }
}

// Function to close forgot password modal
function closeForgotPasswordModal() {
    var modal = document.getElementById("forgotPasswordModal");
    modal.style.display = "none";
}

// Function to handle forgot password submission
function forgotPassword() {
    var username = document.getElementById("forgotUsername").value.toLowerCase(); // Convert username to lowercase
    var answer = document.getElementById("securityAnswer").value.trim().toLowerCase(); // Convert answer to lowercase

    if (username in usersData && usersData[username].securityAnswer.toLowerCase() === answer) {
        alert("Your password is: " + usersData[username].password);
    } else {
        alert("Incorrect answer. Please try again.");
    }
}

// On page load, check if remember me was set
window.onload = function() {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        document.getElementById('usa').value = localStorage.getItem('username');
        document.getElementById('pas').value = localStorage.getItem('password');
        document.getElementById('remember').checked = true;
    }
};