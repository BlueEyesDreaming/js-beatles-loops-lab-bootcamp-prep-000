function theBeatlesPlay(musicians, instruments) {
  var beatles = {};

  for (let i=0; i<musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles

}
