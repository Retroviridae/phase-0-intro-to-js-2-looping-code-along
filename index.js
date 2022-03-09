/*
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);

  }

  return gifts;
}

wrapGifts(gifts);

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGifts(gifts);
*/
/* My Work
const messages = []
function writeCards(array,event) {
    for (let i = 0; i < array.length; i++) {
        messages.push(`Thank you ${array[i]}, for the wonderful ${event} gift!`)
    }

  }
writeCards(["alex","sam"],"birthday");
console.log(messages)
*/
let count 
function countdown(count){
    while (count >0){
    console.log(count--)
    }
}
countdown(19);