




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









// Test / Quizz

function defaut(){
    document.getElementById
}

//function correct(){



//}

function ok(){

let div = document.getElementById("reponse1");
let contenu1 = document.getElementById("contenu1")

        div.classList.add("vert");


        if(contenu1.hasAttribute("hidden")){
            document.getElementById("contenu1").removeAttribute("hidden")
        }else{
            document.getElementById("contenu1").setAttribute("hidden","")
        }
}

function non(){

    let div = document.getElementById("reponse1");
    let contenu1 = document.getElementById("contenu1")

    div.classList.add("rouge"); 

    if(contenu1.hasAttribute("hidden")){
        document.getElementById("contenu1").removeAttribute("hidden")
        document.getElementById("c1").setAttribute("hidden","")
    }else{
        document.getElementById("contenu1").setAttribute("hidden","")
    }

    

}
