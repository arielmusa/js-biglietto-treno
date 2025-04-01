// price calc constant
const ticketPriceByKm = 0.21;
const discountTwenty = 20;
const discountFourty = 40;

// collect user input
let userTravelDistance = parseInt(prompt("Quanti chilometri devi percorrere?"));
let userAge = parseInt(prompt("Qual è la tua età?"));
let discountPerc;

// check if stored input is correct
console.log(userTravelDistance);
console.log(typeof userTravelDistance);
console.log(userAge);
console.log(typeof userAge);

// calc ticketPrice based on user input
let ticketPrice = userTravelDistance * ticketPriceByKm;
console.log(ticketPrice);
let finalPrice;

// handle discounts for userAge <18 and >65
if (userAge < 18) {
  discountPerc = discountTwenty / 100;
  finalPrice = ticketPrice - ticketPrice * discountPerc;
  console.log(finalPrice);
} else if (userAge > 65) {
  discountPerc = discountFourty / 100;
  finalPrice = ticketPrice - ticketPrice * discountPerc;
  console.log(finalPrice);
} else {
  finalPrice = ticketPrice;
}

// convert discount price do string
alert(`Il prezzo del tuo biglietto è: €${finalPrice.toFixed(2)}`);
