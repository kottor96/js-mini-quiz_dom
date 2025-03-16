const signButton = document.querySelector("#start");
var reponse_A;
var questions;
var reponse_B;
var reponse_C;
var bonnes_reponses;
var point=0;
var afficheReponse
var nbr
var i
signButton.addEventListener("click", () => {
    let section=document.querySelector('section')
    section.remove()
    document.querySelector('main').innerHTML=('<section><div><h2 class="titre_question titre">Questionnaire</h2></div></section>');
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
    ]
    nbr=questions.length
    for (let index = 0; index < nbr; index++) {
        afficheReponse=document.querySelector('section')
        let random=Math.floor(Math.random() * nbr);
        i.push(random)
        afficheReponse.innerHTML=("<div class='nb1'><h4 class='titre_special Q1'>1 "+questions[i1]+" :</h4></div><div class='reponse'><button class='A1' >A) "+reponse_A[i1]+"</button><button class='B1'>B) "+reponse_B[i1]+"</button><button class='C1'>C) "+reponse_C[i1]+"</button></div>")
        let A1=afficheReponse.querySelector('.A1')
        let B1=afficheReponse.querySelector('.B1')
        let C1=afficheReponse.querySelector('.C1')
        A1.addEventListener('click', ()=>{
            reponse_A[i1]=bonnes_reponses[i1]
            console.log("1");
        })
        B1.addEventListener('click', ()=>{
            reponse_B[i1]=bonnes_reponses[i1]
            console.log("2")
        })
        C1.addEventListener('click', ()=>{
            reponse_C[i1]=bonnes_reponses[i1]
            console.log("3");
        })
    }
    

});