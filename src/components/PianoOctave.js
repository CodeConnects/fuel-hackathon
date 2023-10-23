// This component renders a single octave of a piano keyboard.
// It consists of 12 keys: 7 white keys and 5 black keys.
// Each key has an onClick function that triggers a note on the pianoSampler
// Tone.js is used to play the notes.
// Sampler is a polyphonic Tone.js class that plays a sampled or calculated note when triggered.

// import { Synth, Destination } from "tone";
import { Sampler, Destination } from "tone";
import '../styles/PianoOctave.css';

const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
const blackKeys = ["C#", "D#", "F#", "G#", "A#"];
//const noteLength = "1n";

const samples = {
  urls: {
    "A0": "A0.mp3",
    "C1": "C1.mp3",
    "D#1": "Ds1.mp3",
    "F#1": "Fs1.mp3",
    "A1": "A1.mp3",
    "C2": "C2.mp3",
    "D#2": "Ds2.mp3",
    "F#2": "Fs2.mp3",
    "A2": "A2.mp3",
    "C3": "C3.mp3",
    "D#3": "Ds3.mp3",
    "F#3": "Fs3.mp3",
    "A3": "A3.mp3",
    "C4": "C4.mp3",
    "D#4": "Ds4.mp3",
    "F#4": "Fs4.mp3",
    "A4": "A4.mp3",
    "C5": "C5.mp3",
    "D#5": "Ds5.mp3",
    "F#5": "Fs5.mp3",
    "A5": "A5.mp3",
    "C6": "C6.mp3",
    "D#6": "Ds6.mp3",
    "F#6": "Fs6.mp3",
    "A6": "A6.mp3",
    "C7": "C7.mp3",
    "D#7": "Ds7.mp3",
    "F#7": "Fs7.mp3",
    "A7": "A7.mp3",
    "C8": "C8.mp3"
  },
  release: 1,
  baseUrl: "/piano-samples/"
};

const pianoSampler = new Sampler(samples).toDestination();

pianoSampler.volume.value = -25;
Destination.mute = true;

function PianoOctave({ octave }) {

  return (
    <div className="piano-octave">
      <div className="key white"
        onMouseDown={() => pianoSampler.triggerAttack(`${whiteKeys[0]}${octave}`)} 
        onMouseUp={() => pianoSampler.triggerRelease(`${whiteKeys[0]}${octave}`)}
        onMouseOut={() => pianoSampler.triggerRelease(`${whiteKeys[0]}${octave}`)}>
        <label>{whiteKeys[0]}{octave}</label>
      </div>

      <div className="key black" 
        onMouseDown={() => pianoSampler.triggerAttack(`${blackKeys[0]}${octave}`)} 
        onMouseUp={() => pianoSampler.triggerRelease(`${blackKeys[0]}${octave}`)}
        onMouseOut={() => pianoSampler.triggerRelease(`${blackKeys[0]}${octave}`)}>
        <label>{blackKeys[0]}{octave}</label>
      </div>

      <div className="key white" 
        onMouseDown={() => pianoSampler.triggerAttack(`${whiteKeys[1]}${octave}`)} 
        onMouseUp={() => pianoSampler.triggerRelease(`${whiteKeys[1]}${octave}`)}
        onMouseOut={() => pianoSampler.triggerRelease(`${whiteKeys[1]}${octave}`)}>
        <label>{whiteKeys[1]}{octave}</label>
      </div>

      <div className="key black" 
        onMouseDown={() => pianoSampler.triggerAttack(`${blackKeys[1]}${octave}`)} 
        onMouseUp={() => pianoSampler.triggerRelease(`${blackKeys[1]}${octave}`)}
        onMouseOut={() => pianoSampler.triggerRelease(`${blackKeys[1]}${octave}`)}>
        <label>{blackKeys[1]}{octave}</label>
      </div>
      
      <div className="key white" 
        onMouseDown={() => pianoSampler.triggerAttack(`${whiteKeys[2]}${octave}`)} 
        onMouseUp={() => pianoSampler.triggerRelease(`${whiteKeys[2]}${octave}`)}
        onMouseOut={() => pianoSampler.triggerRelease(`${whiteKeys[2]}${octave}`)}>
        <label>{whiteKeys[2]}{octave}</label>
      </div>

      <div className="key white" 
        onMouseDown={() => pianoSampler.triggerAttack(`${whiteKeys[3]}${octave}`)} 
        onMouseUp={() => pianoSampler.triggerRelease(`${whiteKeys[3]}${octave}`)}
        onMouseOut={() => pianoSampler.triggerRelease(`${whiteKeys[3]}${octave}`)}>
        <label>{whiteKeys[3]}{octave}</label>
      </div>

      <div className="key black" 
        onMouseDown={() => pianoSampler.triggerAttack(`${blackKeys[2]}${octave}`)} 
        onMouseUp={() => pianoSampler.triggerRelease(`${blackKeys[2]}${octave}`)}
        onMouseOut={() => pianoSampler.triggerRelease(`${blackKeys[2]}${octave}`)}>
        <label>{blackKeys[2]}{octave}</label>
      </div>

      <div className="key white" 
        onMouseDown={() => pianoSampler.triggerAttack(`${whiteKeys[4]}${octave}`)} 
        onMouseUp={() => pianoSampler.triggerRelease(`${whiteKeys[4]}${octave}`)}
        onMouseOut={() => pianoSampler.triggerRelease(`${whiteKeys[4]}${octave}`)}>
        <label>{whiteKeys[4]}{octave}</label>
      </div>

      <div className="key black" 
        onMouseDown={() => pianoSampler.triggerAttack(`${blackKeys[3]}${octave}`)} 
        onMouseUp={() => pianoSampler.triggerRelease(`${blackKeys[3]}${octave}`)}
        onMouseOut={() => pianoSampler.triggerRelease(`${blackKeys[3]}${octave}`)}>
        <label>{blackKeys[3]}{octave}</label>
      </div>

      <div className="key white" 
        onMouseDown={() => pianoSampler.triggerAttack(`${whiteKeys[5]}${octave}`)} 
        onMouseUp={() => pianoSampler.triggerRelease(`${whiteKeys[5]}${octave}`)}
        onMouseOut={() => pianoSampler.triggerRelease(`${whiteKeys[5]}${octave}`)}>
        <label>{whiteKeys[5]}{octave}</label>
      </div>

      <div className="key black" 
        onMouseDown={() => pianoSampler.triggerAttack(`${blackKeys[4]}${octave}`)} 
        onMouseUp={() => pianoSampler.triggerRelease(`${blackKeys[4]}${octave}`)}
        onMouseOut={() => pianoSampler.triggerRelease(`${blackKeys[4]}${octave}`)}>
        <label>{blackKeys[4]}{octave}</label>
      </div>

      <div className="key white" 
        onMouseDown={() => pianoSampler.triggerAttack(`${whiteKeys[6]}${octave}`)} 
        onMouseUp={() => pianoSampler.triggerRelease(`${whiteKeys[6]}${octave}`)}
        onMouseOut={() => pianoSampler.triggerRelease(`${whiteKeys[6]}${octave}`)}>
        <label>{whiteKeys[6]}{octave}</label>
      </div>
    </div>
  );
}

export default PianoOctave;
