// This component renders a single octave of a piano keyboard.
// It consists of 12 keys: 7 white keys and 5 black keys.
// Each key has an onClick function that triggers a note on the synth
// Tone.js is used to play the note.
// Synth is a Tone.js instrument that plays a note when triggered.

import { Synth } from "tone";

import '../styles/PianoOctave.css';

const synth = new Synth().toDestination();

const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
const blackKeys = ["C#", "D#", "F#", "G#", "A#"];

function PianoOctave({ octave }) {
  return (
    <div className="piano-octave">
      {whiteKeys.map(note => (
        <div
          key={note}
          className="white-key"
          onClick={() => synth.triggerAttackRelease(`${note}${octave}`, "8n")}
        >
          {note}{octave}
        </div>
      ))}
      {blackKeys.map(note => (
        <div
          key={note}
          className="black-key"
          onClick={() => synth.triggerAttackRelease(`${note}${octave}`, "8n")}
        >
          {note}{octave}
        </div>
      ))}
    </div>
  );
}

export default PianoOctave;
