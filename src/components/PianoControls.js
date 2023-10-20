import { useState } from 'react';
import { Destination } from 'tone';
import '../styles/PianoControls.css';

function PianoControls() {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0);
  const [btnTxt, setBtnTxt] = useState("Start");

  const handleStartToggle = () => {
    setIsMuted(!isMuted);
    Destination.volume.value = (isMuted ? 40 : 0)
    setBtnTxt(isMuted ? "Mute" : "Start");
    setVolume(isMuted ? 40 : 0);
  };

  return (
    <div className="piano-controls">
      <button onClick={handleStartToggle}>{btnTxt}</button>
      <input
        type="range"
        min="0"
        max="80"
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
