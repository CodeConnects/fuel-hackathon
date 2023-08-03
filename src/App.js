import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Piano</p>
      </header>
      <div className='piano'>

        <div className='piano-upper'>

          <div className='piano-speaker'></div>

          <div className='piano-controls'>
            <div className='piano-control-label'>Octave</div>
            <input type='range' min='0' max='100' value='100' />
          </div>

          <div className='piano-speaker'></div>
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
