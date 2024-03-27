console.log('JS-Oggetti_Studenti')

/* CONSEGNA
MILESTONE 1
Creare un array di oggetti di studenti.
Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta
Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
prima ciclate con un ciclo for
poi commentate il ciclo for e usate il forEach */


//creare un array di oggetti di studenti   
//--ogni studente deve avere nome, cognome ed eta
//   const studente = {nome: '', cognome: '', eta: '' };

const studenti = [
    {
        nome: 'Mario',
        cognome: 'Lanza',
        eta: 34,
    },
    {
        nome: 'Stefania',
        cognome: 'Satta',
        eta: 13,
    },
    {
        nome: 'Luciano',
        cognome: 'Bertolli',
        eta: 56,
    },
    {
        nome: 'Carlo',
        cognome: 'Scano',
        eta: 17,
    },
    {
        nome: 'Ilaria',
        cognome: 'Savoldi',
        eta: 33,
    },


];

console.log(studenti);

//

//ciclare tutti gli studenti e stampare nome e cognome
// for (let i = 0; i < studenti.length; i++){

//     let studente = studenti[i]
//     // console.log(i, studente);

//     //--costante nome
//     const name = studente.nome
//      //--costante cognome
//     const surname = studente.cognome  

//     //stampare nome e cognome
//     console.log(`${name} ${surname}`)        

// };

//commentare il ciclio for e provare con forEach
studenti.forEach(function (studente, i) {
    //--costante nome
    const name = studente.nome
    //--costante cognome
    const surname = studente.cognome
    //stampare nome e cognome
    console.log(`${name} ${surname}`)
});


/* MILESTONE 2
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
Aggiungere il nuovo studente all’array di studenti
Ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà nome, cognome, eta
prima ciclate con un ciclo for
poi commentate il ciclo for e usate il forEach */


//creare oggetto studente => provare tramite prompt dentro l'oggetto
// const nuovoStudente =
// {   //chiedere tramite prompt nome
//     nome: prompt('Inserisci il nome'), //string | Null
//     //chiedere tramite prompt cognome
//     cognome: prompt('Inserisci il cognome'), //string | Null
//     //chiedere tramite prompt età e trasformare stringa in numero
//     eta: parseInt(prompt('Inserisci la tua età')) //Number | NaN
// };


//creare oggetto studente vuoto => provare in maniera dinamica
const nuovoStudente = {};

//INIZIA LA RICHIESTA TRAMITE PROMPT

// chiedere tramite prompt nome
// let   propName = 'nome'
// const valueName = prompt('Inserisci il nome'); //string | Null

// //chiedere tramite prompt cognome
// let propSurname = 'cognome'
// const valueSurname = prompt('Inserisci il cognome');//string | Null

// //chiedere tramite prompt età e trasformare stringa in numero
// let propEta = 'eta'
// const valueEta = parseInt(prompt('Inserisci la tua età'));




// creare le proprietà da inserire nell'oggetto studente
// nuovoStudente[propName] = valueName;
// nuovoStudente[propSurname] = valueSurname;
// nuovoStudente[propEta] = valueEta;

// console.log(nuovoStudente)
// studenti.push(nuovoStudente);
//FINISCE LA RICHIESTA TRAMITE PROMPT

// console.log(studenti);

//per ogni oggetto studente dell'array ciclare e ottenere nome cognome ed età
// for (let i = 0; i<studenti.length; i++){
//     let studente = studenti[i];
//     console.log(`${studente.nome} ${studente.cognome} ${studente.eta}`)  
// };


//sostituire il ciclo for con forEach
studenti.forEach(function (studente, i) {
    console.log(`${studente.nome} ${studente.cognome} ${studente.eta}`)
});


//provare a prendere i valori da un input
const inputNome = document.getElementById('nome');
const inputCognome = document.getElementById('cognome');
const inputEta = document.getElementById('età');
const buttonElement = document.getElementById('invio');
const formElement = document.getElementById('new-student-form');

console.log(inputNome, inputCognome, inputEta, buttonElement)




//PROVARE SENZA IL TAG FORM
// buttonElement.addEventListener('click', function () {
//     //chiedere tramite prompt nome
//     let propName = 'nome'
//     const valueName2 = inputNome.value //string | Null


//     // //chiedere tramite prompt cognome
//     let propSurname = 'cognome'
//     const valueSurname2 = inputCognome.value //string | Null

//     // //chiedere tramite prompt età e trasformare stringa in numero
//     let propEta = 'eta'
//     const valueEta2 = parseInt(inputEta.value);//number

//     // console.log(valueName2, valueSurname2, valueEta2);

//     // creare le proprietà da inserire nell'oggetto studente
//     nuovoStudente[propName] = valueName2;
//     nuovoStudente[propSurname] = valueSurname2;
//     nuovoStudente[propEta] = valueEta2;

//     console.log(nuovoStudente)

//     studenti.push(nuovoStudente);
//     // console.log(studenti);

//     studenti.forEach(function (studente, i) {
//     console.log(`${studente.nome} ${studente.cognome} ${studente.eta}`)
//     });
// });

//PROVARE CON IL TAG FORM
formElement.addEventListener('submit', function (event) {
    event.preventDefault()

    let propName = 'nome'
    const valueName2 = inputNome.value //string | Null

    let propSurname = 'cognome'
    const valueSurname2 = inputCognome.value //string | Null

    let propEta = 'eta'
    const valueEta2 = parseInt(inputEta.value);//number

    // console.log(valueName2, valueSurname2, valueEta2);

    nuovoStudente[propName] = valueName2;
    nuovoStudente[propSurname] = valueSurname2;
    nuovoStudente[propEta] = valueEta2;

    console.log(nuovoStudente)
    studenti.push(nuovoStudente);
    // console.log(studenti);

    studenti.forEach(function (studente, i) {
        console.log(`${studente.nome} ${studente.cognome} ${studente.eta}`)
    });

});

//// SECONDA PARTE 

/* CONSEGNA
MILESTONE 1
Creare un array di oggetti di studenti.  =>(C'è GIà)
Ogni oggetto studente deve avere tre proprietà:nome, cognome, eta .=> (C'è GIà)
Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome, cognome, età   
tramite sfruttando i componenti bootstrap (ad es. in tabella).*/

//andiamo a prendere l'elemento html dove stampiamo gli studenti
const tbodyElement = document.getElementById('tbody-studenti');
const tableElement = document.getElementById('table-studenti');
console.log(tbodyElement);

//cicliamo:
// PER OGNI studente prendiamo nome, cognome ed età e lo stampiamo nella tabella
studenti.forEach(function (studente) {
    tbodyElement.innerHTML += ` <tr>
    <td>${studente.nome}</td>
    <td>${studente.cognome}</td>
    <td>${studente.eta}</td>
 </tr>`
});

/* MILESTONE 2
Dare la possibilità all’utente di aggiungere un nuovo oggetto studente 
inserendo nome, cognome ed età tramite form.
Aggiungere il nuovo studente all’array di studenti.
Aggiornare l’interfaccia con il nuovo studente.*/

formElement.addEventListener('submit', function (event) {
    event.preventDefault()

    let propName = 'nome'
    const valueName2 = inputNome.value //string | Null

    let propSurname = 'cognome'
    const valueSurname2 = inputCognome.value //string | Null

    let propEta = 'eta'
    const valueEta2 = parseInt(inputEta.value);//number

    // console.log(valueName2, valueSurname2, valueEta2);

    nuovoStudente[propName] = valueName2;
    nuovoStudente[propSurname] = valueSurname2;
    nuovoStudente[propEta] = valueEta2;

    console.log(nuovoStudente)
    studenti.push(nuovoStudente);
    // console.log(studenti);

    tbodyElement.innerHTML += ` <tr>
       <td>${nuovoStudente.nome}</td>
       <td>${nuovoStudente.cognome}</td>
       <td>${nuovoStudente.eta}</td>
      </tr>`
    /*BONUS
    Mostrare solo gli studenti maggiorenni filtrando gli elementi dell’array 
    prima di stampare la nuova lista in pagina*/

    tbodyElement.innerHTML = ""

    studenti.forEach(function (studente, i, studenti) {
        //verificare la maggiore età
        console.log(studente, i)
        if (studente.eta >= 18) {

            console.log('sono maggiorenne')
            //se maggiorenne stampare la nuova lista       
            tbodyElement.innerHTML += ` <tr>
       <td>${studente.nome}</td>
       <td>${studente.cognome}</td>
       <td>${studente.eta}</td>
      </tr>`

        }
    })
});








