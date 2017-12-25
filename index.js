function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i=0; i<musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(facts) {
  let i=0;
  array = [];
  while (i < facts.length) {
    console.log(array)
    console.log(facts[i])
    array += `${facts[i]}` + '!!!'
    i++;
  }
  return array
}
