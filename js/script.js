// MILESTONE 0
// Creare l’array di oggetti con le informazioni fornite.

// # MILESTONE 1
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

// # MILESTONE 2
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
// Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
// Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
// Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
// Scott Estrada |	Developer            |	scott-estrada-developer.jpg
// Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg 

const team = [

   {firstName: 'Wayne', lastName: 'Barnett', role: 'Founder & CEO', img: 'wayne-barnett-founder-ceo.jpg'},
   {firstName: 'Angela', lastName: 'Caroll', role: 'Chief Editor', img: 'angela-caroll-chief-editor.jpg'},
   {firstName: 'Walter', lastName: 'Gordon', role: 'Office Manager', img: 'walter-gordon-office-manager.jpg'},
   {firstName: 'Angela', lastName: 'Lopez', role: 'Social Media Manager', img: 'angela-lopez-social-media-manager.jpg'},
   {firstName: 'Scott', lastName: 'Estrada', role: 'Developer', img: 'scott-estrada-developer.jpg'},
   {firstName: 'Barbara', lastName: 'Ramos', role: 'Graphic Designer', img: 'barbara-ramos-graphic-designer.jpg '}

]

console.log(team)

//Stampo su console le informazioni di ciascuno e le vado a prelevare tramite un ciclo for
for(let i = 0; i < team.length; i++){
    const currentPersonalInfo = team[i];
    console.log('-----------------TEAM MEMBER--------------------')
    console.log('Firstname:' + currentPersonalInfo.firstName)
    console.log('Secondname:' + currentPersonalInfo.lastName)
    console.log('Role:' + currentPersonalInfo.role)
    console.log('Source:' + currentPersonalInfo.img)
}