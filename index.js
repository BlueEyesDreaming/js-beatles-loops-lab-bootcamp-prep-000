function theBeatlesPlay(musicians, instruments) {
  var beatles = {};
  for (i=0; i<musicians.length; i++) {
    beatles.push(`${musicians} plays ${instruments}`)
  }
  return beatles 
}
