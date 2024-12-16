var i = 0;
var txt = 'mini camera project';
var speed = 100;

window.onload = function typewriter() {
    if (i < txt.length) {
        document.getElementById("title").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter,speed);
    }
}