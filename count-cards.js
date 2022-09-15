/*
if cards 2, 3, 4, 5, 6 count is +1
if cards 7, 8, 9 count is 0
if cards 10, 'J', 'Q', 'K', 'A' count is -1
*/

let count = 0;

function cc(card) {
  
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;

    case 7:
    case 8:
    case 9:
    count = 0;
    break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;
  }

  if (count >= 1 && count <= 6) {
    return "Count is +" + count + " Bet";
  } else if (count == 0) {
    return "Count is " + count + " Hold";
  } else {
    return "Count is " + count + " Hold";
  }

}

console.log(cc(2));