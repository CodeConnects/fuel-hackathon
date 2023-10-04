// This App component is the root of the React application and displays a piano keyboard.
// It renders the Speakers and Controls components, which are displayed above the keyboard.
// It also renders the PianoOctave component, which renders the piano keys for each octave.

import * as Tone from 'tone';

import PianoSpeaker from './components/PianoSpeaker';
import PianoControls from './components/PianoControls';
import PianoOctave from './components/PianoOctave';
import './App.css';

const synth = new Tone.Synth().toDestination();

const App = () => {
  const octaves = 5;
  const pianoKeys = [];

  for (let i = 0; i < octaves; i++) {
    pianoKeys.push(<PianoOctave key={i} oct={i+1} />);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Piano</p>
      </header>
      
      <div className='piano'>

        <div className='piano-upper'>
          <PianoSpeaker />
          <PianoControls synth={synth} />
          <PianoSpeaker />
        </div>

        <div className='piano-wrap'>
          {pianoKeys}
        </div>

      </div>
    </div>
  );
}

export default App;
