

function confirmation(){
    // Récupération des champs
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
 // let sujet = document.getElementById("sujet").value;
    let message = document.getElementById("message").value;
    // Récupération des éléments erreur
    const errnom = document.getElementById("errnom");
    const erremail = document.getElementById("erremail");
    const errmess = document.getElementById("errmess");
    // Réinitialisation des messages d'erreur
    errnom.innerHTML="";
    erremail.innerHTML="";
    errmess.innerHTML="";
    // Retour du formulaire
    let valid = true
    // Validation du nom
    if(nom===""){
        errnom.innerHTML="Le Nom est obligatoire."
        valid=false
    }
    // Validation du mail
    if(email===""){
        erremail.innerHTML="Le mail est obligatoire."
        valid=false
    }else if(!email.includes("@")){
        erremail.innerHTML="Le mail doit contenir @"
        valid=false
    }
    // Validation du message
    if(message===""){
        errmess.innerHTML="Ecrivez quelque chose dans le champ de texte."
        valid=false
    }else if(message.length<20){
        errmess.innerHTML="Le champ doit contenir au 20 caractères, dite-nous en plus."
        valid=false
    }
    // Si tout est valid
    if(valid){
        alert("Merci, Message envoyez avec succès !")
    }
    return valid;
}

