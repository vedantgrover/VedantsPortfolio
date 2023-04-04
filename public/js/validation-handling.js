const data = require("./data");

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const button = document.getElementById('login-btn');

button.addEventListener('click', function(e) {
    console.log("pressed");

    let admin = data.getAdminProfile(username, password);
    if (admin == null) {
        document.getElementById("test").innerHTML = "User not found";
    } else {
        document.getElementById("test").innerHTML = "User found";
    }
});