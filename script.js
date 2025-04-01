// price calc constant
const ticketPriceByKm = 0.21;

// collect user input
let userTravelDistance = parseInt(prompt("Quanti chilometri devi percorrere?"));
let userAge = parseInt(prompt("Qual è la tua età?"));
let discount;
let discountPerc;

// check if stored input is correct
console.log(userTravelDistance);
console.log(typeof userTravelDistance);
console.log(userAge);
console.log(typeof userAge);

// calc ticketPrice based on user input
let ticketPrice = userTravelDistance * ticketPriceByKm;
console.log(ticketPrice);
let discountPrice;

// handle discounts for userAge <18 and >65
if (userAge < 18) {
  discount = 20;
  discountPerc = discount / 100;
  discountPrice = ticketPrice - ticketPrice * discountPerc;
  console.log(discountPrice);
} else if (userAge > 65) {
  discount = 40;
  discountPerc = discount / 100;
  discountPrice = ticketPrice - ticketPrice * discountPerc;
  console.log(discountPrice);
} else {
  discountPrice = ticketPrice;
}

// convert discount price do string
discountPrice = `€ ${discountPrice.toFixed(2)}`;
console.log(discountPrice);

alert(`Il prezzo del tuo biglietto è: ${discountPrice}`);
