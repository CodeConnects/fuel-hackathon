import { useState } from 'react';
import * as Tone from 'tone';
import '../styles/PianoControls.css';

const PianoControls = () => {
  
  const [mute, setMute] = useState(true);
  const [volume, setVolume] = useState(-Infinity);

  const toggleMute = () => {
    Tone.Destination.mute = !mute;
    setMute(!mute);
  }

  const handleStart = () => {
    Tone.start();
    setVolume(-30); // half of max
    Tone.Destination.volume.value = volume;
    setMute(false);
  };

  const changeVolume = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    Tone.Destination.volume.value = newVolume;
  };

  return (
    <div className="piano-controls">
      <button className='piano-start' onClick={ handleStart }>Start</button>
      <button className='piano-mute' onClick={ toggleMute }>{mute ? 'Unmute' : 'Mute'}</button>
      <input className='piano-volume' 
        type='range' 
        min='-60' 
        max='0' 
        step='1'
        value={volume}
        onChange={ changeVolume } 
      />
    </div>
  );
}

export default PianoControls;
