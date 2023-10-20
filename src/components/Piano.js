// Piano component to display a piano keyboard.
// It renders the Speakers and Controls components, which are displayed above the keyboard.
// It also renders the PianoOctave component, which renders the piano keys for each octave.

import PianoSpeaker from './PianoSpeaker';
import PianoControls from './PianoControls';
import PianoOctave from './PianoOctave';
import '../styles/Piano.css';

const Piano = () => {
  const NUM_OCTAVES = 5;

  return (
    <div className='piano'>

      <div className='piano-upper'>
        <PianoSpeaker />
        <PianoControls />
        <PianoSpeaker />
      </div>

      <div className='piano-wrap'>
        {Array.from({ length: NUM_OCTAVES }, (_, i) => (
          <PianoOctave key={i} octave={i + 1} />
        ))}
      </div>

    </div>
  );
}

export default Piano;
