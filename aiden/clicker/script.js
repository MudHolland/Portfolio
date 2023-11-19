// Initialize variables
let number = 0;
let cps = 0;
let npc = 1;
let item1 = 0;
let item2 = 0;
let item3 = 0;
let item4 = 0;
let item5 = 0;
let costItem1 = 40;
let costItem2 = 150;
let costItem3 = 500;
let costItem4 = 5000;
let costItem5 = 10000;
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
    const numberElement = document.getElementById("number");
    numberElement.innerText = number.toLocaleString(); // Use toLocaleString to format the number
}


// Function to increase CPS
function increaseCPS1() {
    if (number >= cpsItem1) {
        number -= cpsItem1;
        cps += 1;
        cpsItem1 = cpsItem1 + cpsItem1 * cps / 2;
        const cpsCost1Element = document.getElementById("cpsCost1");
        cpsCost1Element.innerText = cpsItem1.toLocaleString(); // Use toLocaleString to format the NPC
        updateCPS();
        updateNumber();
        updateBuyButtons();
    }
}

function increaseCPS2() {
    if (number >= cpsItem2) {
        number -= cpsItem2;
        cps += 3;
        cpsItem2 = cpsItem2 + cpsItem2 * cps / 2;
        const cpsCost2Element = document.getElementById("cpsCost2");
        cpsCost2Element.innerText = cpsItem2.toLocaleString(); // Use toLocaleString to format the NPC
        updateCPS();
        updateNumber();
        updateBuyButtons();
    }
}

function increaseCPS3() {
    if (number >= cpsItem3) {
        number -= cpsItem3;
        cps += 20;
        cpsItem3 = cpsItem3 + cpsItem3 * cps / 2;
        const cpsCost3Element = document.getElementById("cpsCost3");
        cpsCost3Element.innerText = cpsItem3.toLocaleString(); // Use toLocaleString to format the NPC
        updateCPS();
        updateNumber();
        updateBuyButtons();
    }
}

function increaseCPS4() {
    if (number >= cpsItem4) {
        number -= cpsItem4;
        cps += 250;
        cpsItem4 = cpsItem4 + cpsItem4 * cps / 2;
        const cpsCost4Element = document.getElementById("cpsCost4");
        cpsCost4Element.innerText = cpsItem4.toLocaleString(); // Use toLocaleString to format the NPC
        updateCPS();
        updateNumber();
        updateBuyButtons();
    }
}

function increaseCPS5() {
    if (number >= cpsItem5) {
        number -= cpsItem5;
        cps += 10000;
        cpsItem5 = cpsItem5 + cpsItem5 * cps / 2;
        const cpsCost5Element = document.getElementById("cpsCost5");
        cpsCost5Element.innerText = cpsItem5.toLocaleString(); // Use toLocaleString to format the NPC
        updateCPS();
        updateNumber();
        updateBuyButtons();
    } 
}

function buyItem1() {
    if (number >= costItem1) {
        number -= costItem1;
        item1 += 1;
        costItem1 = costItem1 + costItem1 * item1 / 2;
        const npsCost1Element = document.getElementById("npcCost1");
        npsCost1Element.innerText = costItem1.toLocaleString(); // Use toLocaleString to format the NPC
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
        costItem2 = costItem2 + costItem2 * item1 / 2;
        const npsCost2Element = document.getElementById("npcCost2");
        npsCost2Element.innerText = costItem2.toLocaleString(); // Use toLocaleString to format the NPC
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
        costItem3 = costItem3 + costItem3 * item3 / 2;
        const npsCost3Element = document.getElementById("npcCost3");
        npsCost3Element.innerText = costItem3.toLocaleString(); // Use toLocaleString to format the NPC
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
        costItem4 = costItem4 + costItem4 * item4 / 2;
        const npsCost4Element = document.getElementById("npcCost4");
        npsCost4Element.innerText = costItem4.toLocaleString(); // Use toLocaleString to format the NPC
        updateNumber();
        updateNPC();
        updateItem4();
        updateBuyButtons();
    }
}

function buyItem5() {
    if (number >= costItem5) {
        number -= costItem5;
        item5 += 1;
        costItem5 = costItem5 + costItem5 * item5 / 2;
        const npsCost5Element = document.getElementById("npcCost5");
        npsCost5Element.innerText = costItem5.toLocaleString(); // Use toLocaleString to format the NPC
        updateNumber();
        updateNPC();
        updateItem5();
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
    // Update Buy Item4 button
    const buyItem5Button = document.getElementById("buyItem5");
    if (number >= costItem5) {
        buyItem5Button.disabled = false;
    } else {
        buyItem5Button.disabled = true;
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

// Function to update the displayed NPC
function updateNPC() {
    npc = (1 + 1 * item1 + 7 * item2 + 40 * item3 + 1000 * item4);
    const npcElement = document.getElementById("npc");
    npcElement.innerText = npc.toLocaleString(); // Use toLocaleString to format the NPC
}

// Function to update the displayed CPS
function updateCPS() {
    const cpsElement = document.getElementById("cps");
    cpsElement.innerText = cps.toLocaleString(); // Use toLocaleString to format the CPS
}

// Function to update the displayed Item1 count
function updateItem1() {
    const item1Element = document.getElementById("item1");
    item1Element.innerText = item1.toLocaleString(); // Use toLocaleString to format Item1 count
}

// Function to update the displayed Item2 count
function updateItem2() {
    const item2Element = document.getElementById("item2");
    item2Element.innerText = item2.toLocaleString(); // Use toLocaleString to format Item2 count
}

// Function to update the displayed Item3 count
function updateItem3() {
    const item3Element = document.getElementById("item3");
    item3Element.innerText = item3.toLocaleString(); // Use toLocaleString to format Item3 count
}

// Function to update the displayed Item4 count
function updateItem4() {
    const item4Element = document.getElementById("item4");
    item4Element.innerText = item4.toLocaleString(); // Use toLocaleString to format Item4 count
}

// Function to update the displayed Item4 count
function updateItem5() {
    const item5Element = document.getElementById("item5");
    item5Element.innerText = item5.toLocaleString(); // Use toLocaleString to format Item4 count
}


// Function to add CPS to number every second
setInterval(function() {
    number += cps;
    updateNumber();
    updateBuyButtons();
}, 1000);
