const signButton = document.querySelector("#start");
// var reponse_A;
// var questions;
// var reponse_B;
// var reponse_C;
// var bonnes_reponses;
// var point=0;
// var reponse_U;
// var reponse_D;
var btn
let lancer=false
var i=1


//    i=Math.floor(Math.random() * 20);
//          
//     nbr=questions.length

    
//     let button1=document.querySelector('#a')
//     let button2=document.querySelector('#b')
//     let button3=document.querySelector('#c')
//     var btn=document.createElement('button')
//     btn.textContent="continuer"
//     var ok=document.querySelector('#s2')
//     var check=ok.querySelectorAll('p')[1]
//     button1.addEventListener("click", ()=>{
//         if (bonnes_reponses[i]==reponse_A[i]) {
//             // console.log("Bonne réponse ! +1 point")
//             point++
//             document.querySelector("section").querySelectorAll('button').forEach(element => {
//                 element.remove
//             });
//             btn=document.createElement('button')
//             btn.textContent="continuer"
//             console.log('ok'+document.querySelector('.s2 p'));
//             document.querySelector('#s2 p').innerText="Bonne réponse ! +1 point"
//             check.appendChild(btn)
//         }
//         else{
//             // console.log("Mauvaise réponse !");
//             console.log('pas ok');
//             document.querySelector("section").querySelectorAll('button').forEach(element => {
//                 element.remove
//             });
//             btn=document.createElement('button')
//             btn.textContent="continuer"
//             document.querySelector('#s2 p').innerText="Mauvaise réponse ! la bonne reponse est la réponse :"+bonnes_reponses[i]
//             check.appendChild(btn)
//         }
//     })
//     button2.addEventListener("click", ()=>{
//         if (bonnes_reponses[i]==reponse_B[i]) {
//             // console.log("Bonne réponse ! +1 point")
//             point++
//             document.querySelector('#s2 p').innerText="Bonne réponse ! +1 point"
//             check.appendChild(btn)
//         }
//         else{
//             // console.log("Mauvaise réponse !");
//             document.querySelector('#s2 p').innerText="Mauvaise réponse ! la bonne reponse est la réponse :"+bonnes_reponses[i]
//             check.appendChild(btn)
//         }
//     })
//     button3.addEventListener("click", ()=>{
//         if (bonnes_reponses[i]==reponse_C[i]) {
//             // console.log("Bonne réponse ! +1 point")
//             point++
//             document.querySelector('#s2 p').innerText="Bonne réponse ! +1 point"
//             check.appendChild(btn)
//         }
//         else{
//             // console.log("Mauvaise réponse !");
//             document.querySelector('#s2 p').innerText="Mauvaise réponse ! la bonne reponse est la réponse :"+bonnes_reponses[i]
//             check.appendChild(btn)
//         }

//     })
//     // questions.splice(i,1)
//     // bonnes_reponses.splice(i,1)
//     // reponse_A.splice(i,1)
//     // reponse_B.splice(i,1)
//     // reponse_C.splice(i,1)
//     // i=Math.floor(Math.random() * nbr);
//     btn.addEventListener("click", () => {
//     questions.splice(i,1)
//     bonnes_reponses.splice(i,1)
//     reponse_A.splice(i,1)
//     reponse_B.splice(i,1)
//     reponse_C.splice(i,1)
//     let section=document.querySelector('section')
//     section.remove()
//     i=Math.floor(Math.random() * nbr);
//     document.querySelector('main').innerHTML=('<section><div><h2 class="titre_question titre">Questionnaire</h2></div><div class="question"><h4 class="titre_special"></h4></div><div class="reponse"></div></section><section id="s2"><div><p></p><p></p></div></section>');
//     nbr=questions.length
//     //console.log((index+1)+"> "+questions[i]);
//     document.querySelector('h4').innerText=(questions[i]+" :")
//     // console.log(">A  "+reponse_A[i]);
//     // console.log(">B  "+reponse_B[i]);
//     // console.log(">C  "+reponse_C[i]);
//     let afficheReponse=document.querySelector('.reponse')
//     afficheReponse.innerHTML=("<button id='a'>A) "+reponse_A[i]+"</button><button id='b'>B) "+reponse_B[i]+"</button><button id='c'>C) "+reponse_C[i]+"</button>")
//     // while (true){
//     //     // reponse_U=prompt("Veuillez choisir la reponse A, B ou C :");
//     //     if (reponse_U=="k"){
//     //         console.log(bonnes_reponses[i])
//     //     }
//     //     else if (reponse_U.toLocaleUpperCase()=="A") {
//     //         reponse_D=reponse_A[i]
//     //         break
//     //     }
//     //     else if (reponse_U.toLocaleUpperCase()=="B") {
//     //         reponse_D=reponse_B[i]
//     //         break
//     //     }
//     //     else if (reponse_U.toLocaleUpperCase()=="C") {
//     //         reponse_D=reponse_C[i]
//     //         break
//     //     }
//     //     else{
//     //         console.log(reponse_U)
//     //         console.log("veuiller donnez une reponse valide");
//     //     }
//     // }
//     let button1=document.querySelector('#a')
//     let button2=document.querySelector('#b')
//     let button3=document.querySelector('#c')

//     let ok=document.querySelector('#s2')
//     var check=ok.querySelectorAll('p')[1]
//     button1.addEventListener("click", ()=>{
//         if (bonnes_reponses[i]==reponse_A[i]) {
//             // console.log("Bonne réponse ! +1 point")
//             ok.querySelectorAll('button').forEach(element => {
//                 element.remove
//             });
//             btn=document.createElement('button')
//             btn.textContent="continuer"
//             point++
//             document.querySelector('#s2 p').innerText="Bonne réponse ! +1 point"
//             check.appendChild(btn)
//         }
//         else{
//             // console.log("Mauvaise réponse !");
//             ok.querySelectorAll('button').forEach(element => {
//                 element.remove
//             });
//             btn=document.createElement('button')
//             btn.textContent="continuer"
//             document.querySelector('#s2 p').innerText="Mauvaise réponse ! la bonne reponse est la réponse :"+bonnes_reponses[i]
//             check.appendChild(btn)
//         }
//     })
//     button2.addEventListener("click", ()=>{
//         if (bonnes_reponses[i]==reponse_B[i]) {
//             // console.log("Bonne réponse ! +1 point")
//             ok.querySelectorAll('button').forEach(element => {
//                 element.remove
//             });
//             btn=document.createElement('button')
//             btn.textContent="continuer"
//             point++
//             document.querySelector('#s2 p').innerText="Bonne réponse ! +1 point"
//             check.appendChild(btn)
//         }
//         else{
//             // console.log("Mauvaise réponse !");
//             ok.querySelectorAll('button').forEach(element => {
//                 element.remove
//             });
//             btn=document.createElement('button')
//             btn.textContent="continuer"
//             document.querySelector('#s2 p').innerText="Mauvaise réponse ! la bonne reponse est la réponse :"+bonnes_reponses[i]
//             check.appendChild(btn)
//         }
//     })
//     button3.addEventListener("click", ()=>{
//         if (bonnes_reponses[i]==reponse_C[i]) {
//             // console.log("Bonne réponse ! +1 point")
//             ok.querySelectorAll('button').forEach(element => {
//                 element.remove
//             });
//             point++
//             document.querySelector('#s2 p').innerText="Bonne réponse ! +1 point"
//             check.appendChild(btn)
//         }
//         else{
//             // console.log("Mauvaise réponse !");
//             ok.querySelectorAll('button').forEach(element => {
//                 element.remove
//             });
//             document.querySelector('#s2 p').innerText="Mauvaise réponse ! la bonne reponse est la réponse :"+bonnes_reponses[i]
//             btn=document.createElement('button')
//             btn.textContent="continuer"
//             check.appendChild(btn)
//         }
//     })
    
    
//     if (point<10) {
//         console.log("tu as perdu");
//         console.log('tu as '+point+' point')
//     }
//     else{
//         console.log("tu as gagné tu es passer maitre");
//         console.log('tu as '+point+' point')
//     }

// });
    
    


signButton.addEventListener("click", () => {
    if (lancer===false) {
        lancer=true
        let section=document.querySelector('section')
        section.remove()
        document.querySelector('main').innerHTML=('<section><div><h2 class="titre_question titre">Questionnaire</h2></div><div class="question"><h4 class="titre_special"></h4></div><div class="reponse"></div></section><section id="s2"><div><p></p><p></p></div></section>');
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
        document.querySelector('h4').innerText=(questions[i]+" :")
        let afficheReponse=document.querySelector('.reponse')
        afficheReponse.innerHTML=("<button id='a'>A) "+reponse_A[i]+"</button><button id='b'>B) "+reponse_B[i]+"</button><button id='c'>C) "+reponse_C[i]+"</button>")
    }
});
