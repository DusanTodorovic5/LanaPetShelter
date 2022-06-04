$(document).ready(function () {
    navbar_setup();
    $("#prijavaButtomElement").click(function () {
        var username = $("#usernameField").val();
        var password = $("#passwordField").val();
        console.log(username + "  " + password);
        if (username == "test" && password == "test") {
            localStorage.setItem("prijavljen","true");
            window.location.href = "index.html";
        }
    });
});