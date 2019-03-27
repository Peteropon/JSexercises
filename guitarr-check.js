var chordD = ["x", "x", "0", "2", "3", "2"];
var chordEm = [0, 2, 2, 0, 0, 0];
var chordC = ["x", "3", "2", "0", "1", "0"];

var newChord = ["x", "x", "0", "2", "3", "2"];
var chords = [chordC, chordD, chordEm];

function checkChord(chord) {

  if(chord.length == 6) {

  for (var i = 0; i < chords.length; i++) {
    if(compareChords(chord, chords[i])) {
      console.log("its a chord");
      break
    } else return;
  }

} else {
  console.log("This is not a valid chord.");
}

}

function compareChords(chord, array) {
  if (chord.every(function compare(note, index, array) {
    return note == newChord[index];
  })) {
    return true;
  } else {
    return false;
  }
}

checkChord(newChord);
