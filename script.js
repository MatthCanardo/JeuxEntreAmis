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

    // Pseudos
    var names = [name1, name2, name3, name4];
    var phrases = [
        aleatoire(names) + " " + "doit lécher son nez sinon deux gorgées", 
        aleatoire(names) + " " + "doit faire boire" + " " + aleatoire(names),
        "Tu préfères avoir les cheveux qui sentent des pieds ou avoir une haleine de Pitbull, les minoritaires boivent une gorgée"
        
    
    
    
    
    
    
    
    
    
    
    
    
    ]
    
    
    const ajouter = document.getElementById("jeu");
    ajouter.innerHTML = aleatoire(phrases);
    
}
// fonction aléatoire
function aleatoire(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}









