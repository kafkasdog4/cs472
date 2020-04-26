"use strict";
function clock() {
    setInterval(function() {
        let d = new Date();
        const time = d.getHours() < 12 ? "AM" : "PM";
        let dateTimeString = d.getFullYear() + " " + 
            d.getMonth().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + " " + 
            d.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + "<p></p>" + (
            d.getHours() > 12 ? d.getHours() % 12 : d.getHours()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+ ":" + 
            d.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + 
            d.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + " " + time;
        document.getElementById("clock").innerHTML = dateTimeString;
        //document.getElementById("clock").style.fontSize = 10*d.getSeconds() + "%";
    }, 1000);
}
clock();