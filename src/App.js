import PianoSpeaker from './components/PianoSpeaker';
import './styles/PianoSpeaker.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Piano</p>
      </header>
      <div className='piano'>

        <div className='piano-upper'>

          <PianoSpeaker />

          <div className='piano-controls'>
            <div className='piano-control-label'>Octave</div>
            <input type='range' min='0' max='100' value='100' />
          </div>

          <PianoSpeaker />

        </div>

        <div className='piano-keyboard'>
          <div className='white-key'></div>
          <div className='black-key'></div>
          <div className='white-key'></div>
          <div className='black-key'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
