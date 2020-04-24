//palindroma: scrivere una funzione per capire se una parola è palindroma.





//Quindi chiedere una parola all'utente,
var parolaUtente = prompt('Inserisci una parola');
console.log(parolaUtente);
//utilizzare la funzione per sapere se la parola inserita è palindroma
function palindroma (a) {
    var lettereParola = a.split("");
    console.log(lettereParola);

    var lettereParolaReverse = lettereParola.reverse();
    console.log(lettereParolaReverse);

    var parolaInversa = lettereParolaReverse.join('');
    console.log(parolaInversa);
    return parolaInversa;
}

var palindroma = palindroma(parolaUtente);
console.log(palindroma);

// stampare un messaggio appropriato

if (parolaUtente == palindroma) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}
