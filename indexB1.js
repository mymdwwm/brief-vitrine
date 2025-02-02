


// DON 

let optcat1=false;
let optcat2=false;

function opt(cat){
    if (cat === 1) {
        optcat1 = true;
    } else if (cat === 2) {
        optcat2 = true;
    }
}

// Fonction pour gérer la soumission
function submitForm() {
    if (optcat1 && optcat2) {
        alert('Merci.');
        // Ici, vous pouvez envoyer les données ou effectuer d'autres actions
    } else {
        alert('Veuillez choisir une option dans chaque catégorie avant de soumettre.');
    }
}


// Diapo : Histoires

function change(photo){

const pp=document.getElementById("luna");
let h4=document.getElementById("h4");
let histoire=document.getElementById("histoire");
let mois1=document.getElementById("mois1")


    if(photo===1){
        pp.setAttribute('style','background:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/imageB1/chien-luna.png)')
        

        h4.innerHTML="Luna"
        histoire.innerHTML="Trouvée dans la rue avec une patte cassée, Luna a été soignée et a retrouvé sa joie de vivre. Elle coule maintenant des jours heureux dans sa nouvelle famille."
        mois1.innerHTML="Janvier 2024"


    }else if(photo===2){
        pp.setAttribute('style','background:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/imageB1/chat-papillon.png)')

        h4.innerHTML="Oscar";
        histoire.innerHTML="Abandonnée dans une forêt, Oscar était terrifié par les humains. Après des mois de patience et d’amour, il est devenu un chat confiant et affectueux."
        mois1.innerHTML="Mars 2024"

    }else if(photo===3){
        pp.setAttribute('style','background:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/imageB1/chien-max.png)')

        h4.innerHTML="Max"
        histoire.innerHTML="Sauvé d'un laboratoire, Max n'avait jamais connu l'amour. Aujourd'hui, il profite de sa liberté et fait le bonheur de sa famille d'accueil."
        mois1.innerHTML="Février 2024"
    }

    pp.style.backgroundPosition="center"
    pp.style.backgroundSize="cover"

}







// Test / Quizz

function showAnswer(buttonsId, answerId) {
    // Cacher uniquement les boutons
    document.getElementById(buttonsId).style.display = 'none';
    // Afficher la réponse
    document.getElementById(answerId).style.display = 'flex';

    
  }


  // header

  function toggleMenu() {
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
