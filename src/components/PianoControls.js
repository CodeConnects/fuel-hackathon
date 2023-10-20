// this component has a button to start the piano and a slider to control the volume
// it uses the Destination object from Tone.js to control the volume of the piano
// it uses the mute property of the Destination object to mute the piano

import { useState } from 'react';
import { Destination } from 'tone';
import '../styles/PianoControls.css';

function PianoControls() {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0);
  const [btnTxt, setBtnTxt] = useState("Start");

  const handleStartToggle = () => {
    setIsMuted(!isMuted);
    Destination.volume.value = (isMuted ? 22 : 0);
    Destination.mute = (isMuted ? false : true);
    setBtnTxt(isMuted ? "Mute" : "Start");
    setVolume(isMuted ? 22 : 0);
  };

  return (
    <div className="piano-controls">
      <button onClick={handleStartToggle}>{btnTxt}</button>
      <input
        type="range"
        min="0"
        max="70"
        value={volume}
        onChange={e => {
          const value = parseInt(e.target.value, 10);
          Destination.volume.value = value;
          setVolume(value);
        }}
      />
    </div>
  );
}

export default PianoControls;
