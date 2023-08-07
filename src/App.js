import PianoSpeaker from './components/PianoSpeaker';
import './styles/PianoSpeaker.css';
import PianoControls from './components/PianoControls';
import './styles/PianoControls.css';
import PianoKeyboard from './components/PianoKeyboard';
import './styles/PianoKeyboard.css';
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
          <PianoControls />
          <PianoSpeaker />
        </div>

        <PianoKeyboard />

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
