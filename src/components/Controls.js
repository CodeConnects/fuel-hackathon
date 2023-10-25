// This component has a button to start the piano and a slider to control the volume.
// It uses the Destination object from Tone.js to control the volume of the piano.
// It uses the mute property of the Destination object to mute the piano.

import { useState } from 'react';
import { Destination } from 'tone';
import '../styles/Controls.css';

function Controls() {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0);
  const [btnTxt, setBtnTxt] = useState("Mute");

  const handleStartToggle = () => {
    setIsMuted(!isMuted);
    Destination.volume.value = (isMuted ? 0 : -34);
    Destination.mute = (isMuted ? false : true);
    setBtnTxt(isMuted ? "Mute" : "Start");
    setVolume(isMuted ? 0 : -34);
  };

  return (
    <div className="piano-controls">
      <button onClick={handleStartToggle}>{btnTxt}</button>
      <input
        type="range"
        min="-34"
        max="34"
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

export default Controls;
