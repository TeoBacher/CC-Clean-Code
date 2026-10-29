const SCORE_CATEGORY = {
  BRELAN: 30,
  SUITE: 40,
  COLOR: 45,
  FULL: 50,
  SQUARE: 60,
};

export const card = (title = "", value = 0) => ({ title, value });

let setOfcards = [[card("2", 2), card("3", 3), card("4", 4), card("5", 5), card("6", 6)]];



export function highCard(cards){
  let sum = 0;
  for(let card of cards){
    sum += card.value;
  }
  return sum;
}

// Check if the set of cards is a Brelan 
export function isBrelan(cards){
  for(let card of cards){
    let count = cards.filter(c => c.title === card.title).length;
    if(count === 3){
      return true;
    }
  }
  return false;
}

//Check if the set of cards is a Suite
export function isSuite(cards){
  let values = cards.map(card => card.value).sort((a, b) => a - b);
  for(let i = 1; i < values.length; i++){
    if(values[i] !== values[i - 1] + 1){
      return false;
    }
  }
  return true;
}

//Check if the set of cards is a Color
export function isColor(cards){
  let colors = cards.map(card => card.color);
  return colors.every(color => color === colors[0]);
}

//check if the set of cars is a  pair
export function isPair(cards){
  for(let card of cards){
    let count = cards.filter(c => c.title === card.title).length;
    if(count === 2){
      return true;
    }
  }
  return false;
}

//chack if the set of cars is a full
export function isFull(cards){
  if(isBrelan(cards) && isPair(cards)){
    return true;
  }
  return false;
}


