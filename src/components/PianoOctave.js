// This component renders a single octave of a piano keyboard.
// It consists of 12 keys: 7 white keys and 5 black keys.
// Each key has an onClick event handler that calls handleClick(note)
// with the note name as an argument.
// Tone.js is used to play the note.
// Synth is a Tone.js instrument that plays a note when triggered.

import '../styles/PianoOctave.css';

const PianoOctave = (props) => {

  // This function plays a note of the given frequency
  // for an eighth note.
  const playNote = (note) => {
    props.synth.triggerAttackRelease(note + props.oct, '8n');
  }

  return (
    <div className="piano-octave">
      <div className="key white" onClick={() => playNote('C')}></div>
      <div className="key black" onClick={() => playNote('C#')}></div>
      <div className="key white" onClick={() => playNote('D')}></div>
      <div className="key black" onClick={() => playNote('D#')}></div>
      <div className="key white" onClick={() => playNote('E')}></div>
      <div className="key white" onClick={() => playNote('F')}></div>
      <div className="key black" onClick={() => playNote('F#')}></div>
      <div className="key white" onClick={() => playNote('G')}></div>
      <div className="key black" onClick={() => playNote('G#')}></div>
      <div className="key white" onClick={() => playNote('A')}></div>
      <div className="key black" onClick={() => playNote('A#')}></div>
      <div className="key white" onClick={() => playNote('B')}></div>
    </div>
  );
}

export default PianoOctave;
