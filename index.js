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

