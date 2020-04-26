"use strict";

function growLarger() {
    document.getElementById("input_text").style.fontSize = 
        (parseInt(window.getComputedStyle(document.getElementById("input_text")).fontSize) + 8 / 3) + "px";
        console.log(parseInt(window.getComputedStyle(document.getElementById("input_text")).fontSize));
}
function pigLatin(string) {
    let firstLetter = string.charAt(0).toLowerCase();
    if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
        return string + "ay";
    } else {
        return string.charAt(1).toUpperCase() + string.substr(2) + firstLetter + "ay";
    }
}

function malkovizer(string) {
    if (string.length >= 5) {
        return "Malkovich";
    } else {
        return string;
    }
}

document.getElementById("decoration_button").onclick = function() {
    setInterval(growLarger, 500);
}
document.getElementById("decoration_checkbox").onchange = function() {
    let isChecked = document.getElementById("decoration_checkbox").checked;
    if (isChecked) {
        document.getElementById("input_text").style.font = "bold";
        document.getElementById("input_text").style.color = "green";
        document.getElementById("input_text").style.textDecoration = "underline";
        document.body.style.backgroundImage = "url(./images/hundred-dollar-bill.jpg)";
    }
    else {
        document.getElementById("input_text").style.fontWeight = "normal";
        document.getElementById("input_text").style.color = "black";
        document.getElementById("input_text").style.textDecoration = "none";
        document.body.style.backgroundImage = "none";
    }
}
document.getElementById("pig_latin_button").onclick = function() {
    let userText = document.getElementById("input_text").value;
    let changedText = userText.split(" ").map(word => pigLatin(word)).join(" ");
    document.getElementById("input_text").value = changedText;
}
document.getElementById("malkovich_button").onclick = function() {
    let userText = document.getElementById("input_text").value;
    let changedText = userText.split(" ").map(word => malkovizer(word)).join(" ");
    document.getElementById("input_text").value = changedText;
}
