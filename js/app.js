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
        eta: '34'
    },
    {
        nome: 'Stefania',
        cognome: 'Satta',
        eta: '23'
    },
    {
        nome: 'Luciano',
        cognome: 'Bertolli',
        eta: '56'
    },
    {
        nome: 'Carlo',
        cognome: 'Scano',
        eta: '21'
    },
    {
        nome: 'Ilaria',
        cognome: 'Savoldi',
        eta: '33'
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

studenti.forEach(function(studente,i){
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


//creare oggetto studente 
const nuovoStudente = 
             //chiedere tramite prompt nome
            {nome: prompt('Inserisci il nome'), //string | Null
             //chiedere tramite prompt cognome
             cognome: prompt('Inserisci il cognome'), //string | Null
             //chiedere tramite prompt età e trasformare stringa in numero
             eta: parseInt(prompt('Inserisci la tua età')) //Number | NaN
             };
console.log(nuovoStudente)

studenti.push(nuovoStudente);
console.log(studenti);

// for (let i = 0; i<studenti.length; i++){
//     let studente = studenti[i];
//     console.log(`${studente.nome} ${studente.cognome} ${studente.eta}`)  
// };

studenti.forEach(function(studente, i){
    console.log(`${studente.nome} ${studente.cognome} ${studente.eta}`) 
});







