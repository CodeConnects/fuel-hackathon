import PianoSpeaker from './components/PianoSpeaker';
import PianoControls from './components/PianoControls';
import PianoOctave from './components/PianoOctave';
import './App.css';

function App() {
  const octaves = 5;
  const pianoKeys = [];

  for (let i = 0; i < octaves; i++) {
    pianoKeys.push(<PianoOctave key={i} />);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Piano</p>
      </header>
      <div className='piano'>

        <div className='piano-upper'>
          <PianoSpeaker />
          <PianoControls />
          <PianoSpeaker />
        </div>

        {pianoKeys}

      </div>
    </div>
  );
}

export default App;
