// This component renders a single octave of a piano keyboard.
// It consists of 12 keys: 7 white keys and 5 black keys.
// Each key has an onClick function that triggers a note on the pianoSampler
// Tone.js is used to play the notes.
// Sampler is a polyphonic Tone.js class that plays a sampled or calculated note when triggered.

import '../styles/PianoOctave.css';
import PianoKey from './PianoKey';

function PianoOctave({ octave, sampler }) {
  
  const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
  const blackKeys = ["C#", "D#", "F#", "G#", "A#"];

  return (
    <div className="piano-octave">
      <PianoKey key={`${whiteKeys[0]}${octave}`} color={'white'} note={`${whiteKeys[0]}${octave}`} sampler={sampler} />
      <PianoKey key={`${blackKeys[0]}${octave}`} color={'black'} note={`${blackKeys[0]}${octave}`} sampler={sampler} />
      <PianoKey key={`${whiteKeys[1]}${octave}`} color={'white'} note={`${whiteKeys[1]}${octave}`} sampler={sampler} />
      <PianoKey key={`${blackKeys[1]}${octave}`} color={'black'} note={`${blackKeys[1]}${octave}`} sampler={sampler} />
      <PianoKey key={`${whiteKeys[2]}${octave}`} color={'white'} note={`${whiteKeys[2]}${octave}`} sampler={sampler} />
      <PianoKey key={`${whiteKeys[3]}${octave}`} color={'white'} note={`${whiteKeys[3]}${octave}`} sampler={sampler} />
      <PianoKey key={`${blackKeys[2]}${octave}`} color={'black'} note={`${blackKeys[2]}${octave}`} sampler={sampler} />
      <PianoKey key={`${whiteKeys[4]}${octave}`} color={'white'} note={`${whiteKeys[4]}${octave}`} sampler={sampler} />
      <PianoKey key={`${blackKeys[3]}${octave}`} color={'black'} note={`${blackKeys[3]}${octave}`} sampler={sampler} />
      <PianoKey key={`${whiteKeys[5]}${octave}`} color={'white'} note={`${whiteKeys[5]}${octave}`} sampler={sampler} />
      <PianoKey key={`${blackKeys[4]}${octave}`} color={'black'} note={`${blackKeys[4]}${octave}`} sampler={sampler} />
      <PianoKey key={`${whiteKeys[6]}${octave}`} color={'white'} note={`${whiteKeys[6]}${octave}`} sampler={sampler} />
    </div>
  );
}

export default PianoOctave;
