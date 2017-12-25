function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i=0; i<musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(facts) {
  let i=0;
  array = 0;
  while (i < facts.length) {
    array += facts[i] + '!!!'
    i++;
  }
  return array
}
