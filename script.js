// Evenement Validation 
const button = document.getElementById("button");
button.addEventListener("click", jeu); 







// GAME
function jeu(){
    //pseudo ID
    var name1 = document.getElementById("entername1").value; 
    var name2 = document.getElementById("entername2").value; 
    var name3 = document.getElementById("entername3").value; 
    var name4 = document.getElementById("entername4").value; 
    var names = [name1, name2, name3, name4];
    // phrases jeu 
    var phrases = [
    aleatoire(names) + " " + "doit lécher son nez sinon deux gorgées.", 
    aleatoire(names) + " " + "doit faire boire 2 gorgées à" + " " + aleatoire(names) + " " + "s'il ne connait pas sa couleur préféré.",
    "Tu préfères avoir les cheveux qui sentent des pieds ou avoir une haleine de Pitbull, les minoritaires boivent une gorgée.",
    "Citez les marques d'eau minérale dans le sens des aiguilles d'une montre, celui qui bloque doit rester debout jusqu'à la prochaines gorgée ou fini son verre avec le sourire."

]

    // conditions d'entrées 
    if ((name1.length < 0) || (name2.length < 0 ) || (name3.length < 0 ) || (name4.length < 0)){
        alert("erreur");
    }
    
    else{
        const ajouter = document.getElementById("jeu");
        ajouter.innerHTML = aleatoire(phrases);

    } 
}




// fonction aléatoire
function aleatoire(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}










