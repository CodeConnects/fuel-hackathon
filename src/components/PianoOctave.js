
// This component renders a single octave of a piano keyboard.
// It consists of 12 keys: 7 white keys and 5 black keys.
// Each key has an onClick event handler that calls handleClick(note)
// with the note name as an argument.

import './PianoOctave.css';

const PianoOctave = () => {

  const handleClick = (note) => {
    console.log(`Played note: ${note}`);
    // Todo: add logic to play the note sound
  }

  return (
    <div className="piano-octave">
      <div className="key white" onClick={() => handleClick('C')}></div>
      <div className="key black" onClick={() => handleClick('C#')}></div>
      <div className="key white" onClick={() => handleClick('D')}></div>
      <div className="key black" onClick={() => handleClick('D#')}></div>
      <div className="key white" onClick={() => handleClick('E')}></div>
      <div className="key white" onClick={() => handleClick('F')}></div>
      <div className="key black" onClick={() => handleClick('F#')}></div>
      <div className="key white" onClick={() => handleClick('G')}></div>
      <div className="key black" onClick={() => handleClick('G#')}></div>
      <div className="key white" onClick={() => handleClick('A')}></div>
      <div className="key black" onClick={() => handleClick('A#')}></div>
      <div className="key white" onClick={() => handleClick('B')}></div>
    </div>
  );
}

export default PianoOctave;
