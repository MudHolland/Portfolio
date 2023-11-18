// Initialize variables
let number = 0;
let cps = 0;
let npc = 1;
let item1 = 0;
let item2 = 0;
let item3 = 0;
let item4 = 0;
let costItem1 = 40;
let costItem2 = 150;
let costItem3 = 500;
let costItem4 = 5000;
let cpsItem1 = 100;
let cpsItem2 = 200;
let cpsItem3 = 1000;
let cpsItem4 = 10000;
let cpsItem5 = 1000000;

// Function to handle increment button click
function handleIncrement() {
    number += npc;
    updateNumber();
    updateBuyButtons();
}

// Function to update the displayed number
function updateNumber() {
    document.getElementById("number").innerText = number;
}

// Function to increase CPS
function increaseCPS1() {
    if (number >= cpsItem1) {
        number -= cpsItem1;
        cps += 1;
        updateCPS();
        updateNumber();
        updateBuyButtons();
    }
}

function increaseCPS2() {
    if (number >= cpsItem2) {
        number -= cpsItem2;
        cps += 3;
        updateCPS();
        updateNumber();
        updateBuyButtons();
    }
}

function increaseCPS3() {
    if (number >= cpsItem3) {
        number -= cpsItem3;
        cps += 20;
        updateCPS();
        updateNumber();
        updateBuyButtons();
    }
}

function increaseCPS4() {
    if (number >= cpsItem4) {
        number -= cpsItem4;
        cps += 250;
        updateCPS();
        updateNumber();
        updateBuyButtons();
    }
}

function increaseCPS5() {
    if (number >= cpsItem5) {
        number -= cpsItem5;
        cps += 10000;
        updateCPS();
        updateNumber();
        updateBuyButtons();
    } 
}

function buyItem1() {
    if (number >= costItem1) {
        number -= costItem1;
        item1 += 1;
        updateNumber();
        updateNPC();
        updateItem1();
        updateBuyButtons();
    }
}

function buyItem2() {
    if (number >= costItem2) {
        number -= costItem2;
        item2 += 1;
        updateNumber();
        updateNPC();
        updateItem2();
        updateBuyButtons();
    }
}

function buyItem3() {
    if (number >= costItem3) {
        number -= costItem3;
        item3 += 1;
        updateNumber();
        updateNPC();
        updateItem3();
        updateBuyButtons();
    }
}

function buyItem4() {
    if (number >= costItem4) {
        number -= costItem4;
        item4 += 1;
        updateNumber();
        updateNPC();
        updateItem4();
        updateBuyButtons();
    }
}

function updateBuyButtons() {
    // Update Buy Item1 button
    const buyItem1Button = document.getElementById("buyItem1");
    if (number >= costItem1) {
        buyItem1Button.disabled = false;
    } else {
        buyItem1Button.disabled = true;
    }
    // Update Buy Item2 button
    const buyItem2Button = document.getElementById("buyItem2");
    if (number >= costItem2) {
        buyItem2Button.disabled = false;
    } else {
        buyItem2Button.disabled = true;
    }
    // Update Buy Item3 button
    const buyItem3Button = document.getElementById("buyItem3");
    if (number >= costItem3) {
        buyItem3Button.disabled = false;
    } else {
        buyItem3Button.disabled = true;
    }
    // Update Buy Item4 button
    const buyItem4Button = document.getElementById("buyItem4");
    if (number >= costItem4) {
        buyItem4Button.disabled = false;
    } else {
        buyItem4Button.disabled = true;
    }
    // Update Buy increaseCPSButton1 button
    const buyCPS1Button = document.getElementById("increaseCPSButton1");
    if (number >= cpsItem1) {
        buyCPS1Button.disabled = false;
    } else {
        buyCPS1Button.disabled = true;
    }
    // Update Buy increaseCPSButton2 button
    const buyCPS2Button = document.getElementById("increaseCPSButton2");
    if (number >= cpsItem2) {
        buyCPS2Button.disabled = false;
    } else {
        buyCPS2Button.disabled = true;
    }
    // Update Buy increaseCPSButton3 button
    const buyCPS3Button = document.getElementById("increaseCPSButton3");
    if (number >= cpsItem3) {
        buyCPS3Button.disabled = false;
    } else {
        buyCPS3Button.disabled = true;
    }
    // Update Buy increaseCPSButton4 button
    const buyCPS4Button = document.getElementById("increaseCPSButton4");
    if (number >= cpsItem4) {
        buyCPS4Button.disabled = false;
    } else {
        buyCPS4Button.disabled = true;
    }
    // Update Buy increaseCPSButton5 button
    const buyCPS5Button = document.getElementById("increaseCPSButton5");
    if (number >= cpsItem5) {
        buyCPS5Button.disabled = false;
    } else {
        buyCPS5Button.disabled = true;
    }
}

// Function to update the displayed Item1 count
function updateNPC() {
    npc = (1 + 1 * item1 + 7 * item2 + 40 * item3 + 1000 * item4);
    document.getElementById("npc").innerText = npc;
}
function updateCPS() {
    document.getElementById("cps").innerText = cps;
}
function updateItem1() {
    document.getElementById("item1").innerText = item1;
}
function updateItem2() {
    document.getElementById("item2").innerText = item2;
}
function updateItem3() {
    document.getElementById("item3").innerText = item3;
}
function updateItem4() {
    document.getElementById("item4").innerText = item4;
}

// Function to add CPS to number every second
setInterval(function() {
    number += cps;
    updateNumber();
    updateBuyButtons();
}, 1000);
