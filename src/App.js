// This App component is the root of the React application and displays a piano keyboard.
// It renders the Speakers and Controls components, which are displayed above the keyboard.
// It also renders the PianoOctave component, which renders the piano keys for each octave.

import PianoSpeaker from './components/PianoSpeaker';
import PianoControls from './components/PianoControls';
import PianoOctave from './components/PianoOctave';
import './App.css';

const App = () => {
  const NUM_OCTAVES = 5;

  return (
    <div className="app">

      <header className="app-header">
        <p>Piano</p>
      </header>

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
    </div>
  );
}

export default App;
