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
        eta: 23,
    },
    {
        nome: 'Luciano',
        cognome: 'Bertolli',
        eta: 56,
    },
    {
        nome: 'Carlo',
        cognome: 'Scano',
        eta: 21,
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

//perché nel ciclo for ho dovuto dare un valore alla variabile i (let studente = studenti[i]),
//mentre nel forEach non serve? Perché avendolo indicato nel paramentro è già di suo il singolo
//elemento dell'array?


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


//chiedere tramite prompt nome
let   propName = 'nome'
const valueName = prompt('Inserisci il nome'); //string | Null

//chiedere tramite prompt cognome
let propSurname = 'cognome'
const valueSurname = prompt('Inserisci il cognome');//string | Null

//chiedere tramite prompt età e trasformare stringa in numero
let propEta = 'eta'
const valueEta = parseInt(prompt('Inserisci la tua età'));

//creare le proprietà da inserire nell'oggetto studente
nuovoStudente[propName] = valueName;
nuovoStudente[propSurname] = valueSurname;
nuovoStudente[propEta] = valueEta;

console.log(nuovoStudente)

studenti.push(nuovoStudente);
console.log(studenti);

//per ogni oggetto studente dell'array ciclare e ottenere nome cognome ed età
// for (let i = 0; i<studenti.length; i++){
//     let studente = studenti[i];
//     console.log(`${studente.nome} ${studente.cognome} ${studente.eta}`)  
// };


//sostituire il ciclo for con forEach
studenti.forEach(function (studente, i) {
    console.log(`${studente.nome} ${studente.cognome} ${studente.eta}`)
});


//solo il mio 




