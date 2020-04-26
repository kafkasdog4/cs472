"use strict";
//1
function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
//2
function maxOfThree(x, y, z) {
    // return x > y ? x > z ?  x : z : y > z ? y : z;
    return max(max(x, y), z);
}
//3
function isVowel(c) {
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c ==='u') {
        return true;
    } else {
        return false;
    }
}
//4a
function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
}
//4b
function multiply(arr) {
    let m = 0;
    for (let i = 0; i < arr.length; i++) {
        m *= arr[i];
    }
    return m;
}
//5
function reverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
//6
function findLongestWord(arr) {
    let len = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > len) {
            len = arr[i].length;
        }
    }
    return len;
}
//7
function filterLongWords(arr, i) {
    const filtered = [];
    let index = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].length > i) {
            filtered[index] = arr[j].length;
            index++;
        }
    }
    return filtered;
}
//8
function computeSumOfSquares(arr) {
    return arr.reduce((acc, cur) => acc + cur * cur, 0);
}
//9
function printOddNumbersOnly(arr) {
    arr.filter(num => num % 2 === 1).forEach(odd => console.log(odd));
}
//10
function computeSumOfSquaresOfEvensOnly(arr) {
    return arr.filter(num => num % 2 === 0).map(num => num * num).reduce((acc, cur) => acc + cur);
}
//11a
function imperativeSum(arr) {
    return arr.reduce((acc, cur) => acc + cur);
}
//11b
function imperativeMultiply(arr) {
    return arr.reduce((acc, cur) => acc * cur);
}
//12
function findSecondBiggest(arr) {
    const max = arr.reduce((acc, cur) => acc < cur ? cur : acc);
    return arr.filter(num => num < max).reduce((acc, cur) => acc < cur ? cur : acc);
}
//13
function printFibo(n, a, b) {
    while (n > 0) {
        console.log(a);
        let temp = a;
        a = b;
        b += temp;
        n--;
    }
}

this.document.getElementById("SubmitButton").onclick = function() {
    const formData = document.productForm.elements;
    let w = window.open('', '', 'width=400,height=400,resizeable,scrollbars');
    for (let i = 0; i < formData.length; i++) {
        if(formData[i].tagName != "button") {
            w.document.write(formData[i].name + ": " + formData[i].value + "<br>");
        }
    }
}
this.document.getElementById("SignUpButton").onclick = function() {
    const formData = document.pageForm.elements;
    for (let i = 0; i < formData.length; i++) {
        if (formData[i].type != "submit") {
            console.log(formData[i].value);
        }
    }
}
    

