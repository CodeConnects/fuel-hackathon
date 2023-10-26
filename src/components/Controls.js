// This component has a button to start the piano and a slider to control the volume.
// It uses the Destination object from Tone.js to control the volume of the piano.
// It uses the mute property of the Destination object to mute the piano.

import { useState } from 'react';
import { Destination } from 'tone';
import { saveAs } from 'file-saver';
import '../styles/Controls.css';

function Controls({ isRecording, startRecording, stopRecording, clearRecording, recording }) {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0);
  const [btnTxt, setBtnTxt] = useState("Mute");

  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    Destination.volume.value = (isMuted ? 0 : -34);
    Destination.mute = (isMuted ? false : true);
    setBtnTxt(isMuted ? "Mute" : "Unmute");
    setVolume(isMuted ? 0 : -34);
  };

  const playRecording = () => {
    if (!isPlaying) {
      const audio = new Audio(recording);
      audio.play();
      setAudio(audio);
      setIsPlaying(true);

      audio.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    } else {
      if (audio) {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  const saveRecording = () => {
    saveAs(recording, 'piano-recording.mp3');
  };

  return (
    <div className="piano-controls">
      <div className="piano-controls-volume">
        <button onClick={handleMuteToggle}>{btnTxt}</button>
        <input
          type="range"
          min="-34"
          max="15"
          value={volume}
          onChange={e => {
            const value = parseInt(e.target.value, 10);
            Destination.volume.value = value;
            setVolume(value);
          }}
        />
      </div>

      <div className="piano-controls-record">
        <button onClick={isRecording ? stopRecording : startRecording}>
          {isRecording ? 'Stop' : 'Record'}
        </button>

        <button onClick={playRecording} disabled={!recording}>{isPlaying ? 'Stop' : 'Play'}</button>

        <button onClick={saveRecording} disabled={!recording}>Save</button>

        <button onClick={clearRecording} disabled={!recording}>Clear</button>
      </div>
    </div>
  );
}

export default Controls;
