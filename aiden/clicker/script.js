// Initialize variables
let number = 0;
let cps = 0;
let npc = 1;
let item1 = 0;
let item2 = 0;
let item3 = 0;

// Function to handle increment button click
function handleIncrement() {
    npc = (1 + 1 * item1 + 7 * item2 + 40 * item3);
    document.getElementById("npc").innerText = npc;
    number += npc;
    updateNumber();
}

// Function to update the displayed number
function updateNumber() {
    document.getElementById("number").innerText = number;
}

// Function to increase CPS
function increaseCPS1() {
    if (number >= 100) {
        number -= 100;
        cps += 1;
        document.getElementById("cps").innerText = cps;
        updateNumber();
    }
}

function increaseCPS2() {
    if (number >= 200) {
        number -= 200;
        cps += 3;
        document.getElementById("cps").innerText = cps;
        updateNumber();
    }
}

function buyItem1() {
    if (number >= 40) {
        number -= 40;
        item1 += 1;
        updateNumber();
        updateItem1();
    }
}

function buyItem2() {
    if (number >= 200) {
        number -= 200;
        item2 += 1;
        updateNumber();
        updateItem2();
    }
}

function buyItem3() {
    if (number >= 1000) {
        number -= 1000;
        item3 += 1;
        updateNumber();
        updateItem3();
    }
}

// Function to update the displayed Item1 count
function updateItem1() {
    document.getElementById("item1").innerText = item1;
}
function updateItem2() {
    document.getElementById("item2").innerText = item2;
}
function updateItem3() {
    document.getElementById("item3").innerText = item3;
}

// Function to add CPS to number every second
setInterval(function() {
    number += cps;
    updateNumber();
}, 1000);
