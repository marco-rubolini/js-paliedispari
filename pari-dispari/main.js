//gioco pari o dispari contro il pc:
//chiedere all'utente un numero tra 1 e 5

var numeroUtente = parseInt(prompt('Scegli un numero tra 1 e 5'));
console.log(numeroUtente);
//e generare un numero random tra 1 e 5.
var numeroPc = Math.floor((Math.random() * 5) + 1);
console.log(numeroPc);
//Chiedere all'utente se sceglie pari o dispari,
var pariDispari = prompt('Scegli pari o dispari');
console.log(pariDispari);
//quindi fare la somma dei due numeri (giocata utente + giocata pc),
var somma = numeroUtente + numeroPc;
console.log(somma);
//quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno
if (somma % 2 == 0) {
    console.log('il numero è pari');
} else {
    console.log('il numero è dispari');
}
