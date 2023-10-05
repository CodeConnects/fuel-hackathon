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
      <div className="key white" onClick={() => synth.triggerAttackRelease(`${whiteKeys[0]}${octave}`, "8n")}>
        {whiteKeys[0]}{octave}
      </div>
      <div className="key black" onClick={() => synth.triggerAttackRelease(`${blackKeys[0]}${octave}`, "8n")}>
        {blackKeys[0]}{octave}
      </div>
      <div className="key white" onClick={() => synth.triggerAttackRelease(`${whiteKeys[1]}${octave}`, "8n")}>
        {whiteKeys[1]}{octave}
      </div>
      <div className="key black" onClick={() => synth.triggerAttackRelease(`${blackKeys[1]}${octave}`, "8n")}>
        {blackKeys[1]}{octave}
      </div>
      <div className="key white" onClick={() => synth.triggerAttackRelease(`${whiteKeys[2]}${octave}`, "8n")}>
        {whiteKeys[2]}{octave}
      </div>
      <div className="key white" onClick={() => synth.triggerAttackRelease(`${whiteKeys[3]}${octave}`, "8n")}>
        {whiteKeys[3]}{octave}
      </div>
      <div className="key black" onClick={() => synth.triggerAttackRelease(`${blackKeys[2]}${octave}`, "8n")}>
        {blackKeys[2]}{octave}
      </div>
      <div className="key white" onClick={() => synth.triggerAttackRelease(`${whiteKeys[4]}${octave}`, "8n")}>
        {whiteKeys[4]}{octave}
      </div>
      <div className="key black" onClick={() => synth.triggerAttackRelease(`${blackKeys[3]}${octave}`, "8n")}>
        {blackKeys[3]}{octave}
      </div>
      <div className="key white" onClick={() => synth.triggerAttackRelease(`${whiteKeys[5]}${octave}`, "8n")}>
        {whiteKeys[5]}{octave}
      </div>
      <div className="key black" onClick={() => synth.triggerAttackRelease(`${blackKeys[4]}${octave}`, "8n")}>
        {blackKeys[4]}{octave}
      </div>
      <div className="key white" onClick={() => synth.triggerAttackRelease(`${whiteKeys[6]}${octave}`, "8n")}>
        {whiteKeys[6]}{octave}
      </div>
    </div>
  );
}

export default PianoOctave;
