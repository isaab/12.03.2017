var red_ = document.getElementById('red');
var yellow_ = document.getElementById('yellow');
var green_ = document.getElementById('green');

function red() {
    red_.style.backgroundColor = "#e21b1b";
    yellow_.style.backgroundColor = "#666666";
    green_.style.backgroundColor = "#666666";
}

function yellow() {
    red_.style.backgroundColor = "#666666";
    yellow_.style.backgroundColor = "#ffcc26";
    green_.style.backgroundColor = "#666666";
}

function green() {
    red_.style.backgroundColor = "#666666";
    yellow_.style.backgroundColor = "#666666";
    green_.style.backgroundColor = "#17d117";
}

function change() {
    setTimeout(red, 1000);
    setTimeout(yellow, 6000);
    setTimeout(green, 8000);
}