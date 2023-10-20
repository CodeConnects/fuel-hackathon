import { useState } from 'react';
import { Destination } from 'tone';
import '../styles/PianoControls.css';

function PianoControls() {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(-Infinity);  // Muted

  const handleMuteToggle = () => {
    Destination.mute = !Destination.mute;
    setIsMuted(!isMuted);
  };

  const handleStart = () => {
    setVolume(0);
    Destination.volume.value = 0;  // Half of max
  };

  return (
    <div className="piano-controls">
      <button onClick={handleStart}>Start</button>
      <button onClick={handleMuteToggle}>
        {isMuted ? "Unmute" : "Mute"}
      </button>
      <input
        type="range"
        min="-5"
        max="5"
        value={volume}
        onChange={e => {
          const value = parseInt(e.target.value, 10);
          Destination.volume.value = -value;
          setVolume(-value);
        }}
      />
    </div>
  );
}

export default PianoControls;
