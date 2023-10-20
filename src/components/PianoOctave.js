// This component renders a single octave of a piano keyboard.
// It consists of 12 keys: 7 white keys and 5 black keys.
// Each key has an onClick function that triggers a note on the synth
// Tone.js is used to play the note.
// Synth is a Tone.js instrument that plays a note when triggered.

import { Synth, Destination } from "tone";
import '../styles/PianoOctave.css';

const synth = new Synth().toDestination();
synth.volume.value = -25;
Destination.mute = true;

const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
const blackKeys = ["C#", "D#", "F#", "G#", "A#"];
const noteLength = "4n";

function PianoOctave({ octave }) {

  return (
    <div className="piano-octave">
      <div className="key white" onMouseDown={() => synth.triggerAttackRelease(`${whiteKeys[0]}${octave}`, noteLength)}>
        {whiteKeys[0]}{octave}
      </div>
      <div className="key black" onMouseDown={() => synth.triggerAttackRelease(`${blackKeys[0]}${octave}`, noteLength)}>
        {blackKeys[0]}{octave}
      </div>
      <div className="key white" onMouseDown={() => synth.triggerAttackRelease(`${whiteKeys[1]}${octave}`, noteLength)}>
        {whiteKeys[1]}{octave}
      </div>
      <div className="key black" onMouseDown={() => synth.triggerAttackRelease(`${blackKeys[1]}${octave}`, noteLength)}>
        {blackKeys[1]}{octave}
      </div>
      <div className="key white" onMouseDown={() => synth.triggerAttackRelease(`${whiteKeys[2]}${octave}`, noteLength)}>
        {whiteKeys[2]}{octave}
      </div>
      <div className="key white" onMouseDown={() => synth.triggerAttackRelease(`${whiteKeys[3]}${octave}`, noteLength)}>
        {whiteKeys[3]}{octave}
      </div>
      <div className="key black" onMouseDown={() => synth.triggerAttackRelease(`${blackKeys[2]}${octave}`, noteLength)}>
        {blackKeys[2]}{octave}
      </div>
      <div className="key white" onMouseDown={() => synth.triggerAttackRelease(`${whiteKeys[4]}${octave}`, noteLength)}>
        {whiteKeys[4]}{octave}
      </div>
      <div className="key black" onMouseDown={() => synth.triggerAttackRelease(`${blackKeys[3]}${octave}`, noteLength)}>
        {blackKeys[3]}{octave}
      </div>
      <div className="key white" onMouseDown={() => synth.triggerAttackRelease(`${whiteKeys[5]}${octave}`, noteLength)}>
        {whiteKeys[5]}{octave}
      </div>
      <div className="key black" onMouseDown={() => synth.triggerAttackRelease(`${blackKeys[4]}${octave}`, noteLength)}>
        {blackKeys[4]}{octave}
      </div>
      <div className="key white" onMouseDown={() => synth.triggerAttackRelease(`${whiteKeys[6]}${octave}`, noteLength)}>
        {whiteKeys[6]}{octave}
      </div>
    </div>
  );
}

export default PianoOctave;
