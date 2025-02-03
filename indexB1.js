

// DON 

let montantChoisi = null;
let frequenceChoisie = null;
// Montant du don
function optMontant(montant) {
    montantChoisi = montant;
}
// Fréquence du don
function optFrequence(frequence) {
    frequenceChoisie = frequence;
}
// Envoi du "formulaire" et affichage
function submitForm() {
    if (montantChoisi !== null && frequenceChoisie !== null) { // Corect ; Affiche le maessage avec détail du don
        alert("Merci ! Vous avez choisi un don de " + montantChoisi + "€ " + frequenceChoisie + ".");
    } else { // Incorect ; un élément manquant affiche le maessage
        alert("Veuillez choisir un montant et une fréquence avant de soumettre.");
    }
}

// Diapo : Histoires

function change(photo) {
    // Déclaration des variables 
    const pp = document.getElementById("luna");
    let h4 = document.getElementById("h4");
    let histoire = document.getElementById("histoire");
    let mois1 = document.getElementById("mois1")

    // Au choix sur la miniature luna elle reprend la place pp
    if (photo === 1) {
        pp.setAttribute('style', 'background:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/imageB1/chien-luna.png)') // image de fond et ombre linéaire
        h4.innerHTML = "Luna" // Titre remplacer
        histoire.innerHTML = "Trouvée dans la rue avec une patte cassée, Luna a été soignée et a retrouvé sa joie de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille." // histoire remplacée
        mois1.innerHTML = "Janvier 2024" // date remplacée
        // Au choix sur la miniature oscar, elle prend la pp
    } else if (photo === 2) {
        pp.setAttribute('style', 'background:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/imageB1/chat-papillon.png)')
        h4.innerHTML = "Oscar";
        histoire.innerHTML = "Abandonnée dans une forêt, Oscar était terrifié par les humains. Après des mois de patience et d’amour, il est devenu un chat confiant et affectueux."
        mois1.innerHTML = "Mars 2024"
        // Au choix sur la miniature max, elle prend la pp
    } else if (photo === 3) {
        pp.setAttribute('style', 'background:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/imageB1/chien-max.png)')
        h4.innerHTML = "Max"
        histoire.innerHTML = "Sauvé d'un laboratoire, Max n'avait jamais connu l'amour. Aujourd'hui, il profite de sa liberté et fait le bonheur de sa famille d'accueil."
        mois1.innerHTML = "Février 2024"
    }
    // Alignement des images 
    pp.style.backgroundPosition = "center"
    pp.style.backgroundSize = "cover"

}

// TEST / QUIZZ
// Tableau pour comparer les réponses
let bonnesReponses = {
    1: "Faux",
    2: "Faux",
    3: "Faux"
};
let scoreU = 0;
// Fonction à deux pramètres: 
function deroule(numeroQuestion, reponseUtilisateur) {
    // Déclaration des variables 
    let buttonsId = "buttons" + numeroQuestion;
    let reponseId = "reponse" + numeroQuestion;
    // sélection par id
    let buttonsDiv = document.getElementById(buttonsId);
    let reponseDiv = document.getElementById(reponseId);

    let scoreDiv = document.getElementById("scoreDiv");

    // Masque les boutons au click via css
    buttonsDiv.style.display = 'none';
    // Affiche la réponse à la place via css
    reponseDiv.style.display = 'flex';

    // Création d'une balise <img> pour placer l'icone
    let img = document.createElement("img");
    img.alt = "Résultat"; // Texte alternatif de la source
    // Vérifie que la réponse coorect est celle choisi par l'u
    if (reponseUtilisateur === bonnesReponses[numeroQuestion]) {
        // Fond vert si correct
        reponseDiv.style.backgroundColor = 'var(--quizzvrai)';
        // Ajt image check
        img.src = "assetB1/checkvr.svg"; // Image de validation 
        scoreU++ // Incrémentation
    } else {
        // Fond rouge si incorrect
        reponseDiv.style.backgroundColor = 'var(--quizzfaux)';
        // Ajt image croix
        img.src = "assetB1/xre.svg"; // Image d'erreur 
    }

    // PARTIE NON FONCTIONNEL
    // Ajouter l'image au début de la réponse
    reponseDiv.prepend(img);
    scoreDiv.textContent = "Score : " + scoreU + " / 3";

    // Afficher la div du score si elle est cachée
    if (scoreDiv.style.display === "none") {
        scoreDiv.style.display = "block";
    }
}


// HEADER

function toggleMenu() {
    // Déclaration des variables
    const menuContent = document.getElementById('menu');
    const body = document.body;
    // Basculer la classe 'show' sur le menu
    menuContent.classList.toggle('show');

    // Basculer la classe 'menu-open' sur le body pour décaler le contenu principal
    if (menuContent.classList.contains('show')) {
        body.classList.add('menu-open');
    } else {
        body.classList.remove('menu-open');
    }
}
// Attache l'événement à l'icône du menu
document.getElementById('croix').onclick = toggleMenu;
