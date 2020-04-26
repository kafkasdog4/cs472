"use strict";
function clock() {
    setInterval(function() {
        let d = new Date();
        let dateString = d.toString().split(d.getFullYear())[0].concat(d.getFullYear());
        const time = d.getHours() < 12 ? "AM" : "PM";
        let dateTimeString = dateString + "<p></p>" + (
            d.getHours() > 12 ? d.getHours() % 12 : d.getHours()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+ ":" + 
            d.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + 
            d.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + " " + time;
        document.getElementById("clock").innerHTML = dateTimeString;
        //document.getElementById("clock").style.fontSize = 10*d.getSeconds() + "%";
    }, 1000);
}
clock();