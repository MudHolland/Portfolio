document.addEventListener("DOMContentLoaded", function() {
    // Voer deze code uit wanneer de DOM geladen is
    initializeSelect(['hoofdpersoon-karakter', 'hoofdpersoon-drijfveer']);
});

function initializeSelect(selectIds) {
    // Itereer over alle opgegeven ID's en stel de selectedIndex in op -1 voor elk <select> element
    selectIds.forEach(function(selectId) {
        var selectElement = document.getElementById(selectId);
        if (selectElement) {
            selectElement.selectedIndex = -1;
        }
    });
}

function selecteerWillekeurigeWaarden(selectIds) {
    // Itereer over alle opgegeven ID's en roep selecteerWillekeurigeWaarde aan voor elk <select> element
    selectIds.forEach(function(selectId) {
        selecteerWillekeurigeWaarde(selectId);
    });
}

function selecteerWillekeurigeWaarde(selectId) {
    // Haal het <select> element op
    var selectElement = document.getElementById(selectId);

    // Krijg het aantal opties in het <select> element
    var aantalOpties = selectElement.options.length - 1;

    // Genereer een willekeurig getal tussen 0 en aantalOpties - 1
    var willekeurigIndex = Math.floor(Math.random() * aantalOpties + 1);

    // Stel de geselecteerde index in
    selectElement.selectedIndex = willekeurigIndex;
}