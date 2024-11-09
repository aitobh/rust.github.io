// script.js

function calculerRessources() {
    // Récupérer le nombre de rockets
    const nbRockets = document.getElementById("rockets-number").value;
    
    if (nbRockets < 1 || isNaN(nbRockets)) {
        alert("Veuillez entrer un nombre valide de rockets.");
        return;
    }

    // Ressources nécessaires pour une rocket
    const metalPipePerRocket = 2;
    const gunPowderPerRocket = 150;
    const explosivesPerRocket = 10;  // Chaque rocket nécessite 10 explosifs
    
    // Ressources nécessaires pour fabriquer un explosif
    const gunPowderPerExplosive = 50;
    const lowGradeFuelPerExplosive = 3;
    const sulfurPerExplosive = 10;
    const metalFragmentsPerExplosive = 10;
    
    // Calcul des ressources pour les rockets
    const totalMetalPipes = nbRockets * metalPipePerRocket;
    const totalGunPowderRockets = nbRockets * gunPowderPerRocket;
    const totalExplosives = nbRockets * explosivesPerRocket;
    
    // Calcul des ressources pour les explosifs
    const totalGunPowderExplosives = totalExplosives * gunPowderPerExplosive;
    const totalLowGradeFuel = totalExplosives * lowGradeFuelPerExplosive;
    const totalSulfur = totalExplosives * sulfurPerExplosive;
    const totalMetalFragments = totalExplosives * metalFragmentsPerExplosive;
    
    // Total global de chaque ressource
    const totalGunPowder = totalGunPowderRockets + totalGunPowderExplosives;
    
    // Affichage des résultats
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = 'grid';
    resultDiv.innerHTML = `
        <h2>Ressources nécessaires pour ${nbRockets} Rocket(s)</h2>

        <div class="section">
            <i class="fas fa-rocket"></i>
            <div><strong>${nbRockets} Rocket(s):</strong><br>
            ${totalMetalPipes} Metal Pipe<br>
            ${totalGunPowderRockets} Gun Powder<br>
            ${totalExplosives} Explosifs</div>
        </div>

        <div class="section">
            <i class="fas fa-bomb"></i>
            <div><strong>${totalExplosives} Explosif(s):</strong><br>
            ${totalGunPowderExplosives} Gun Powder<br>
            ${totalLowGradeFuel} Low Grade Fuel<br>
            ${totalSulfur} Sulfur<br>
            ${totalMetalFragments} Metal Fragments</div>
        </div>

        <div class="total">
            <i class="fas fa-cogs"></i>
            <div><strong>Total :</strong><br>
            ${totalMetalPipes} Metal Pipe<br>
            ${totalGunPowder} Gun Powder<br>
            ${totalLowGradeFuel} Low Grade Fuel<br>
            ${totalSulfur} Sulfur<br>
            ${totalMetalFragments} Metal Fragments</div>
        </div>
    `;
}
