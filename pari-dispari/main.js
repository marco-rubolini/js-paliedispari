//gioco pari o dispari contro il pc:
//chiedere all'utente un numero tra 1 e 5

var numeroUtente = parseInt(prompt('Scegli un numero tra 1 e 5'));
// if (numeroUtente > 5) {
//     console.log('Non hai inserito un numero corretto');
// }
console.log(numeroUtente);
//e generare un numero random tra 1 e 5.
var numeroPc = Math.floor((Math.random() * 5) + 1);
console.log(numeroPc);
//Chiedere all'utente se sceglie pari o dispari,
var sceltaUtente = prompt('Scelgi pari o dispari');
console.log(sceltaUtente);
//quindi fare la somma dei due numeri (giocata utente + giocata pc),
var somma = numeroUtente + numeroPc;
console.log(somma);

verifica(somma,sceltaUtente);

//quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno
function verifica (somma,sceltaUtente) {


if (somma % 2 == 0) {
    var pariDispariUtente = 'pari';
    console.log('il numero è pari');
} else {
    var pariDispariUtente = 'dispari';
    console.log('il numero è dispari');
}

if (pariDispariUtente == sceltaUtente) {
    console.log('Hai vinto!');
    return true;
} else {
    console.log('Hai perso');
    return false;
}

}
