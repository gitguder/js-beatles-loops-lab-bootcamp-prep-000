// add solution here
function theBeatlesPlay(musicians, instruments) {
  const array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + ${instruments[i]});
    }
    return array;
}

function johnLennonFacts() {
  const array = [];
  let i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  const array = [];
  do {
    array.push("I love The Beatles!");
    number ++;
  } while (number < 15);
return array;
};
