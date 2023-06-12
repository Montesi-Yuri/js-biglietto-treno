
/* 
GENERAL
*/

let userDistance = prompt('Inserisci la quantità di chilometri che devi percorrere')

if (userDistance = isNaN) {
    alert ('Inserisci un numero (1,2,3,...)')
}

console.log ('userDistance in km', userDistance, typeof userDistance)

const userDistanceConverted = parseInt(userDistance);

// ---------------------------------------------------

let userAge = prompt('Inserisci la tua età')

if (userAge = Number) {
    console.log (userAge, 'ok');
}
else {
    alert ('Inserisci un numero (1,2,3,...)');
}

console.log ('userAge', userAge, typeof userAge)

const userAgeConverted = parseInt(userAge);

// ---------------------------------------------------

const ticketPrice = (userDistanceConverted * 0.21)

console.log ('user ticket price', ticketPrice)

// ---------------------------------------------------

let finalPrice = 0


if (userAgeConverted <= 18) {

    finalPrice = (ticketPrice - ((ticketPrice * 20) / 100));

} else if (userAgeConverted >= 65) {

    finalPrice = (ticketPrice - ((ticketPrice * 40) / 100));

} else {

    finalPrice = (ticketPrice);
    
}

console.log (finalPrice);

// ---------------------------------------------------

function round(finalPrice) {

    let m = Number((Math.abs(finalPrice) * 100).toPrecision(7));
    return Math.round(m) / 100 * Math.sign(finalPrice);
}


document.getElementById('user-ticket').innerHTML = finalPrice + '€';