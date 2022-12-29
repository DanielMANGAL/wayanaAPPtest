// Hey Hey lit bien ce texte c'est pour toi 

// VOilà le code pour réaliser le fameux projet
// Il est publique en ce moment mais nous passerons en mode privée
// une fois QUE TU AURAS ton compte github, j'espère que tu le feras bientot
//

// Donc voila les lignes tu t'attarderas surtout sur les parties avec les commentaires
// C'est là qu'on a besoin de ton aide.


// Merci si tu veux bien coopérer. 
// Ton père également sera très satisfait !!

// PS: ne pas partager ces informations 

let presentation = document.getElementById('presentation')
let themes = document.getElementById('themes')
let histoireTheme = document.getElementById('histoireTheme')
let parTheme = document.getElementById('parTheme')
let thematique= document.querySelectorAll('.thematique')
let cours = document.getElementById('cours')
let exos = document.getElementById('exos')
let question = document.getElementById('question')
let reponses = document.getElementById('reponses')
let reponse1=  document.getElementById('reponse1')
let reponse2=  document.getElementById('reponse2')
let reponse3=  document.getElementById('reponse3')
let reponse4=  document.getElementById('reponse4')
let reponse5=  document.getElementById('reponse5')
let enTete= document.getElementById('en-tete')
let numeroQuestions =document.getElementById('numeroQuestions')
let numScore = document.getElementById('numScore')
let numQuestion= 0
let score = 0
// Hello salut continue à descendre et à lire ce qui est en vert c'est pour toi !!!

let intro = document.createElement('audio')
intro.src = 'intro.mp3'
function demarrer(){
    presentation.style.display='none'
    themes.style.display='block'
    themes.style.display='grid'
    parTheme.style.display='none'
    intro.play()
   

}

function retour(){
    presentation.style.display='block'
    themes.style.display='none'
    thematique.forEach(thematique=>{
        thematique.style.display='none'
    })
    cours.style.display='none'
    qcm.style.display='none'
    enTete.style.display='none'
}
function histoireThemes(){
    themes.style.display='none'
    parTheme.style.display='block'
    histoireTheme.style.display='block'
    histoireTheme.style.display='grid'
 
}

function avantXVII(){
    parTheme.style.display='none'
    exos.style.display='block'
    cours.style.display='block'
    // Salut Rachel, Donc ici en bas tu mets le texte que les élèves devront lire pour répondre aux 
    // questions c'est comme du cours si tu veux 
    cours.innerHTML=`Datant du VIe millénaire av. J.-C., les premières traces de peuples amérindiens sont des poteries, des gravures rupestres et des polissoirs. Les descendants de ces peuples seraient les peuples autochtones Tekos et Wayampi, parlant le tupi-guarani. Ces premiers peuples amérindiens auraient commencé le processus de création des terres fertiles de Terra preta. Quelques millénaires plus tard, cette transformation des sols permet l'établissement de populations aux densités plus élevées[réf. nécessaire].

    À la fin du iiie siècle, venus de l’ouest et du sud, les indiens Arawak et Palikurs, probablement originaires d’Amazonie, arrivent sur le littoral et chassent les premiers habitants. Ils parlent des langues de la famille linguistique arawak.
    
    À la fin du viiie siècle, des indiens Caraïbes, les peuples Kali'na (ou Galibis) et Wayana occupent à leur tour les littoraux et l'est de l'actuelle Guyane, ils parlent le caribe.
    
    Plusieurs dizaines de nations amérindiennes ont conjointement ou successivement peuplé la Guyane et l'actuel État brésilien de l'Amapá depuis 400 ans.
    
    Des indices archéo-historiques[Lesquels ?] font penser qu'au xvie siècle, une partie au moins des sous-groupes qui donneront les Wayana, vivait au Nord de l'Amazone. Au début du xviiie siècle, remontant progressivement le Paru de leste et le Jari, ils semblent avoir absorbé des peuples de chasseurs cueilleurs (dont Upurui et Opagwana). Les Wayampi sont cités par les Portugais au xviie siècle comme occupant les rives du Rio Xingu au sud de l'Amazone, qu'ils semblent avoir franchi en vagues successives après 1720.
    
    Au xviiie siècle, deux nations amérindiennes remontent vers le nord, alors que les envahisseurs venus d'outre-mer colonisent l'Amérique du Sud, amenant armes et microbes inconnus sur ce continent. C'est le temps de la colonisation qui arrive.
    
    Le 5 août 1498, au cours de son troisième voyage, Christophe Colomb longe pour la première fois les côtes de la Guyane. Des populations indigènes amérindiennes occupent le littoral, et sont estimées à environ 30 000 Amérindiens pour la Guyane française, au siècle suivant, ils ne sont plus que 25 000[réf. nécessaire].
    
    À l'hiver 1500, le capitaine espagnol Vicente Yañez Pinzon, qui avait accompagné Christophe Colomb lors de son premier voyage et qu'une tempête jette le 26 janvier dans le delta de l’Amazone, reconnaît la côte portugaise jusqu'à l'Orénoque, future frontière de la Guyane.
    
    Les Guyanes n'étant pas concernées par le traité de Tordesillas de 1494 qui traçait les limites territoriales entre l'Espagne et le Portugal, vers 1503, un premier groupe de colons français se serait installé dans l’île de Cayenne pendant quelques années.`


}

function exo(){
    numQuestion=0
    enTete.style.display='block'
    enTete.style.display='flex'
    cours.style.display='none'
    qcm.style.display='block'
    exos.style.display='none'
    reponses.style.display='grid'
    questionAsk()


}
// ici commence le QCM 
let questionnaire =[
    {
        // pour question tu mets donc la premiere question
        question : 'Quels groupes de personnes vivaient en Guyane au 15ème siecle ? ',
        // Après comme tu vois tu as la liste de chants possibles 
        reponse1 : 'amérindiens',
        reponse2 : 'américains',
        reponse3 : 'chinois',
        reponse4 : 'bushinengués',
        // il faut par contre bien recopier si c'est reponse1 ou reponse 3...
        answer: 'reponse1'

    },
    //Maintenant ici la deuxieme question avec les propositions de réponses
    {
        question : 'A quel endroit le premier groupe de colons français se seraient installés ? ',
        reponse1 : 'à Mana',
        reponse2 : 'à Iracoubo',
        reponse3 : 'à Maripasoula',
        reponse4 : "sur l'île de Cayenne",
        answer: 'reponse4'

    },
    {
        question : "Comment s'appelle le processus de fertilisation utilisé par les amérindiens à cette époque ? ",
        reponse1 : 'La Terra Buena',
        reponse2 : 'la Terra Preta',
        reponse3 : 'le repos',
        reponse4 : "les produits chimiques",
        answer: 'reponse2'

    },
    {
        question : "Combien de personnes environ peuplait la région de la Guyane au 16 eme sicele ?  ",
        reponse1 : '30 000',
        reponse2 : '3 000 000',
        reponse3 : '300 000',
        reponse4 : "3 000",
        answer: 'reponse1'

    },
    {
        question : "Combien de personnes environ peuplait la région de la Guyane au 16 eme sicele ?  ",
        reponse1 : '30 000',
        reponse2 : '3 000 000',
        reponse3 : '300 000',
        reponse4 : "3 000",
        answer: 'reponse1'

    },
    {
        question : "Quel groupe de personnes ne fait pas partie des premiers habitants de la Guyane?  ",
        reponse1 : 'wayana',
        reponse2 : 'Kalinia',
        reponse3 : 'créoles',
        reponse4 : "palikurs",
        answer: 'reponse3'

    },


]

reponse1.addEventListener('click',check)
reponse2.addEventListener('click',check)
reponse3.addEventListener('click',check)
reponse4.addEventListener('click',check)


function check(){
    const chosenId = this.getAttribute('id')
if(chosenId==questionnaire[numQuestion].answer){
    score++
    numScore.innerHTML= score
    
    alert('bonne réponse !')
    
    

}
else{
    const bonneReponse = questionnaire[numQuestion].answer
    alert('Mauvaise réponse ! Réessayer ! ')
    alert("la bonne réponse est "+ bonneReponse)
}
setTimeout(questionAsk,1000)
numQuestion++
if(numQuestion>5){
    alert(' bravo !! Vous avez fini ce jeu !')
    alert('Voulez vous achetez la version premium de cette application  pour bénéficier de toutes les fonctionnalités ?')
}
}

function questionAsk(){
if(numQuestion <questionnaire.length){
       
    question.innerHTML= questionnaire[numQuestion].question
    reponse1.innerHTML=questionnaire[numQuestion].reponse1
    reponse2.innerHTML=questionnaire[numQuestion].reponse2
    reponse3.innerHTML=questionnaire[numQuestion].reponse3
    reponse4.innerHTML=questionnaire[numQuestion].reponse4
   
    numeroQuestions.innerHTML=numQuestion+1
  

}}
