const signButton = document.querySelector("#start");
var reponse_A;
var questions;
var reponse_B;
var reponse_C;
var bonnes_reponses;
var point=0;
var afficheReponse
var i
signButton.addEventListener("click", () => {
    let section=document.querySelector('section')
    section.remove()
    user=prompt("merci de rentrer votre nom :", "idiot")
    document.querySelector('main').innerHTML=('<section><div><h2 class="titre_question titre">Questionnaire</h2></div><div class="score"><p>nom : '+user+'</p><p id="score">score = '+point+'</p></div></section>');
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
    const nbr=questions.length
    for (let i = 0; i < nbr; i++) {
        afficheReponse=document.querySelector('section')
        afficheReponse.insertAdjacentHTML("beforeend","<div id='div"+i+"'><div class='div'><h4 class='titre_special'> "+((i+1))+" "+questions[i]+" :</h4></div><div class='reponse'><button class='A' >A) "+reponse_A[i]+"</button><button class='B'>B) "+reponse_B[i]+"</button><button class='C'>C) "+reponse_C[i]+"</button></div></div>")
        console.log(questions[i]);
        const A=afficheReponse.querySelectorAll('.A')[i]
        const B=afficheReponse.querySelectorAll('.B')[i]
        const C=afficheReponse.querySelectorAll('.C')[i]
        A.addEventListener('click', ()=>{
            if(reponse_A[i]==bonnes_reponses[i]){
                point++
                alert("bonne reponse")
                if (i!=nbr) {
                    document.querySelector('#div'+i).style.display = 'none';
                    document.querySelector('#div'+((i+1))).style.display='block';
                }
                document.querySelector('#score').innerText=("score = "+point)
            }
            else{
                alert("mauvaise reponse")
                if (i!=nbr) {
                    document.querySelector('#div'+i).style.display = 'none';
                    document.querySelector('#div'+((i+1))).style.display='block';
                }
                document.querySelector('#score').innerText=("score = "+point)
            }
        })
        B.addEventListener('click', ()=>{
            if(reponse_B[i]==bonnes_reponses[i]){
                point++
                alert("bonne reponse")
                if (i!=nbr) {
                    document.querySelector('#div'+i).style.display = 'none';
                    document.querySelector('#div'+((i+1))).style.display='block';
                }
                document.querySelector('#score').innerText=("score = "+point)
            }
            else{
                alert("mauvaise reponse")
                if (i!=nbr) {
                    document.querySelector('#div'+i).style.display = 'none';
                    document.querySelector('#div'+((i+1))).style.display='block';
                }
                document.querySelector('#score').innerText=("score = "+point)
            }
        })
        C.addEventListener('click', ()=>{
            if(reponse_C[i]==bonnes_reponses[i]){
                point++
                alert("bonne reponse")
                if (i!=nbr) {
                    document.querySelector('#div'+i).style.display = 'none';
                    document.querySelector('#div'+((i+1))).style.display='block';
                }
                document.querySelector('#score').innerText=("score = "+point)
            }
            else{
                alert("mauvaise reponse")
                if (i!=nbr) {
                    document.querySelector('#div'+i).style.display = 'none';
                    document.querySelector('#div'+((i+1))).style.display='block';
                }
                document.querySelector('#score').innerText=("score = "+point)
            }
        })
    }
    for (let index = 1; index < nbr; index++) {
        const cacher=document.querySelector('#div'+index)
        cacher.style.display= "none"
    }
});