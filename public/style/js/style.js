const signButton = document.querySelector("#start");
var reponse_A;
var questions;
var reponse_B;
var reponse_C;
var bonnes_reponses;
var point=0;
var A
var B
var C
i
signButton.addEventListener("click", () => {
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
    document.querySelector('h4').innerText=(questions[i]+" :")
    let afficheReponse=document.querySelector('.reponse')
    afficheReponse.innerHTML=("<button id='A'>A) "+reponse_A[i]+"</button><button id='B'>B) "+reponse_B[i]+"</button><button id='C'>C) "+reponse_C[i]+"</button>")
    A=document.querySelector('#A')
    B=document.querySelector('#B')
    C=document.querySelector('#C')
    button=[A,B,C]
    console.log(button)

});
