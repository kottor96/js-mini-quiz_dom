
const signButton = document.querySelector("#start");
const log = document.querySelector("#log");
var reponse_A
var questions
var reponse_B
var reponse_C
var bonnes_reponses
var point
var reponse_U
var truc1
var truc2
var truc3
var truc4
var truc5

signButton.addEventListener("click", () => {
    document.querySelector('body').
    point = 0
    questions = [
        "Quel est le mode de vie des nains selon la chanson ?",
        "Comment les nains perçoivent-ils les habitants de la surface ?",
        "Qui est Gurdil et quelle est sa mission ?",
        "Pourquoi Gurdil s’installe-t-il en bordure de forêt ?",
        "Comment les elfes réagissent-ils à l’arrivée de Gurdil ?",
        "Que font les fées lorsqu’elles recueillent Gurdil ?",
        "Quelle est la réaction de Gurdil après avoir bu l’eau des fées ?",
        "Pourquoi Gurdil fuit-il vers un village humain ?",
        "Comment les humains réagissent-ils à la présence de Gurdil dans la taverne ?",
        "Quelle est la conséquence des actes de Gurdil dans la taverne ?",
        "Comment la chanson illustre-t-elle les clichés sur les nains dans l’univers médiéval-fantastique ?",
        "Pourquoi la bière est-elle un élément central dans la culture des nains de la chanson ?",
        "Comment l’opposition entre les nains et les elfes est-elle présentée ?",
        "Que peut-on déduire de la vision des nains sur les autres races (elfes, humains, fées) ?",
        "Quelle est l’ironie dans le fait que Gurdil ne quitte plus jamais la mine après son aventure ?",
        "Quels éléments de la chanson rappellent l’univers du Seigneur des Anneaux ?",
        "Quelles autres œuvres de fantasy présentent des nains avec des caractéristiques similaires ?",
        "Pourquoi cette chanson est-elle populaire dans la communauté médiéval-fantastique et rôliste ?",
        "Comment l’humour est-il utilisé pour renforcer l’identité des nains dans cette chanson ?",
        "Quelle morale pourrait-on tirer de l’histoire de Gurdil ?"
    ]
    reponse_A = [
        "Ils creusent le jour et boivent la nuit",
        "Ils les aiment bien",
        "Un nain explorateur",
        "Pour échapper aux orques",
        "Ils l'accueillent chaleureusement",
        "Elles lui offrent de la bière",
        "Il apprécie et en demande encore",
        "Parce qu'il cherche du travail",
        "Ils lui offrent une bière gratuitement",
        "Il devient le roi des nains",
        "En exagérant leurs traits typiques",
        "Car c’est une tradition sacrée",
        "Ils sont amis",
        "Ils respectent tout le monde",
        "Il devient célèbre",
        "Les mines, les elfes et la bière",
        "Le Seigneur des Anneaux",
        "Parce qu'elle est courte",
        "Avec des blagues sur la bière et les elfes",
        "Ne jamais faire confiance aux elfes"
    ]
    reponse_B = [
        "Ils vivent à la surface avec les elfes",
        "Ils ne les aiment pas",
        "Un roi des nains",
        "Parce qu'on lui a dit qu'il y avait du mythril",
        "Ils l'ignorent",
        "Elles lui donnent de l’eau",
        "Il recracher tout sur leur visage",
        "Parce qu’il veut boire une bière",
        "Ils refusent de lui servir à boire",
        "Il tue le patron de la taverne",
        "En les montrant comme des êtres sérieux",
        "Parce qu'ils n'ont que ça à boire",
        "Ils se détestent",
        "Ils méprisent les elfes et les humains",
        "Il ne quitte plus jamais la mine",
        "Les dragons et les licornes",
        "Harry Potter",
        "Parce qu'elle caricature les clichés des nains",
        "Avec un ton sérieux",
        "Ne jamais partir sans sa bière"
    ]
    reponse_C = [
        "Ils voyagent à travers le monde",
        "Ils veulent devenir amis avec eux",
        "Un guerrier légendaire",
        "Parce qu’il voulait vivre avec les elfes",
        "Ils lui jettent des pierres",
        "Elles le ramènent chez lui",
        "Il la garde précieusement",
        "Parce qu’il veut rejoindre un ami",
        "Ils lui demandent de raconter son histoire",
        "Il se fait capturer par les humains",
        "En les comparant aux elfes",
        "Parce qu'ils aiment l'eau",
        "Ils travaillent ensemble",
        "Ils veulent conquérir le monde",
        "Il devient un héros",
        "Les voyages dans l’espace",
        "Star Wars",
        "Parce qu’elle est triste",
        "Avec des références modernes",
        "Ne jamais quitter sa montagne"
    ]
    bonnes_reponses = [
        "Ils creusent le jour et boivent la nuit",
        "Ils ne les aiment pas",
        "Un nain explorateur",
        "Parce qu'on lui a dit qu'il y avait du mythril",
        "Ils lui jettent des pierres",
        "Elles lui donnent de l’eau",
        "Il recracher tout sur leur visage",
        "Parce qu’il veut boire une bière",
        "Ils refusent de lui servir à boire",
        "Il tue le patron de la taverne",
        "En exagérant leurs traits typiques",
        "Car c’est une tradition sacrée",
        "Ils se détestent",
        "Ils méprisent les elfes et les humains",
        "Il ne quitte plus jamais la mine",
        "Les mines, les elfes et la bière",
        "Le Seigneur des Anneaux",
        "Parce qu'elle caricature les clichés des nains",
        "Avec des blagues sur la bière et les elfes",
        "Ne jamais quitter sa montagne"
    ]
    nbr=questions.length
    for (let index = 0; index < nbr; index++) {
        let i=Math.floor(Math.random() * questions.length);
        console.log((index+1)+"> "+questions[i]);
        console.log(">A  "+reponse_A[i]);
        console.log(">B  "+reponse_B[i]);
        console.log(">C  "+reponse_C[i]);
        while (true){
            // reponse_U=prompt("Veuillez choisir la reponse A, B ou C :");
            if (reponse_U=="k"){
                console.log(bonnes_reponses[i])
            }
            else if (reponse_U.toLocaleUpperCase()=="A") {
                reponse_D=reponse_A[i]
                break
            }
            else if (reponse_U.toLocaleUpperCase()=="B") {
                reponse_D=reponse_B[i]
                break
            }
            else if (reponse_U.toLocaleUpperCase()=="C") {
                reponse_D=reponse_C[i]
                break
            }
            else{
                console.log(reponse_U)
                console.log("veuiller donnez une reponse valide");
            }
        }
        if (bonnes_reponses[i]==reponse_D) {
            console.log("Bonne réponse ! +1 point")
            point++
        }
        else {
            console.log("Mauvaise réponse !");   
        }
        questions.splice(i,1)
        bonnes_reponses.splice(i,1)
        reponse_A.splice(i,1)
        reponse_B.splice(i,1)
        reponse_C.splice(i,1)
    }
    if (point<10) {
        console.log("tu as perdu");
        console.log('tu as '+point+' point')
    }
    else{
        console.log("tu as gagné tu es passer maitre");
        console.log('tu as '+point+' point')
    }
    
});