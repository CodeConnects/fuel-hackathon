// This App component is the root of the React application and displays a piano keyboard.

import Piano from './components/Piano';
import './App.css';

const App = () => {
  return (
    <div className="app">

      <header className="app-header">
        <p>Piano</p>
      </header>

      <Piano />

    </div>
  );
}

export default App;
