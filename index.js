function theBeatlesPlay(musicians, instruments) {
  var beatles = {};
  console.log(beatles)
  for (let i=0; i<5; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
    console.log(beatles)
  }
  return beatles

}
