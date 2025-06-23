// Fonction qui génère un choix aléatoire pour l'ordinateur
function choixOrdinateur() {
  let choix = ["pierre", "feuille", "ciseaux"]; // Liste des choix possibles
  let choixAleatoire = choix[Math.floor(Math.random() * choix.length)]; // Choix aléatoire
  return choixAleatoire; // Retourne le choix
}

// Fonction qui détermine le gagnant en comparant les choix du joueur et de l'ordinateur
function determinerGagnant(joueur, ordinateur) {
  if (joueur === ordinateur) {
    return "Égalité !"; // Cas d'égalité
  } else if (
    (joueur === "pierre" && ordinateur === "ciseaux") ||
    (joueur === "feuille" && ordinateur === "pierre") ||
    (joueur === "ciseaux" && ordinateur === "feuille")
  ) {
    return "Tu gagnes !"; // Cas où le joueur gagne
  } else {
    return "Tu perds !"; // Tous les autres cas : l'ordinateur gagne
  }
}

// Fonction principale qui est déclenchée lorsque le joueur clique sur un bouton
function jouer(choixJoueur) {
  let choixOrdi = choixOrdinateur(); // L'ordinateur fait un choix
  let gagnant = determinerGagnant(choixJoueur, choixOrdi); // Détermination du résultat

  // Affichage des résultats dans la page HTML
  document.getElementById("joueur").textContent = "Votre choix : " + choixJoueur;
  document.getElementById("ordinateur").textContent = "Choix de l'ordinateur : " + choixOrdi;
  document.getElementById("gagnant").textContent = gagnant;
}
