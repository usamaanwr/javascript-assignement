function copytext(params) {
    var pass = document.getElementById("password").value;
    navigator.clipboard.writeText(pass);
    alert("copy password")
}
function genbtn(params) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var password = "";
    var length = 30;

    for (var i = 0; i < length; i++){
        var randominput = Math.floor(Math.random()*chars.length);
        password += randominput[chars];
    }
    Document.getElementById("Generate ").value;
}