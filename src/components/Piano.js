// This component displays a piano keyboard.
// It calls the Speakers and Controls components, which are displayed above the keyboard.
// It also renders the PianoOctave component, which renders the piano keys for each octave.

import { useState, useEffect, useCallback } from 'react';
import * as Tone from 'tone';

import Speaker from './Speaker';
import Controls from './Controls';
import Octave from './Octave';
import '../styles/Piano.css';

const audioFiles = {
  "A0": "/piano-samples/A0.mp3",
  "C1": "/piano-samples/C1.mp3",
  "D#1": "/piano-samples/Ds1.mp3",
  "F#1": "/piano-samples/Fs1.mp3",
  "A1": "/piano-samples/A1.mp3",
  "C2": "/piano-samples/C2.mp3",
  "D#2": "/piano-samples/Ds2.mp3",
  "F#2": "/piano-samples/Fs2.mp3",
  "A2": "/piano-samples/A2.mp3",
  "C3": "/piano-samples/C3.mp3",
  "D#3": "/piano-samples/Ds3.mp3",
  "F#3": "/piano-samples/Fs3.mp3",
  "A3": "/piano-samples/A3.mp3",
  "C4": "/piano-samples/C4.mp3",
  "D#4": "/piano-samples/Ds4.mp3",
  "F#4": "/piano-samples/Fs4.mp3",
  "A4": "/piano-samples/A4.mp3",
  "C5": "/piano-samples/C5.mp3",
  "D#5": "/piano-samples/Ds5.mp3",
  "F#5": "/piano-samples/Fs5.mp3",
  "A5": "/piano-samples/A5.mp3",
  "C6": "/piano-samples/C6.mp3",
  "D#6": "/piano-samples/Ds6.mp3",
  "F#6": "/piano-samples/Fs6.mp3",
  "A6": "/piano-samples/A6.mp3",
  "C7": "/piano-samples/C7.mp3",
  "D#7": "/piano-samples/Ds7.mp3",
  "F#7": "/piano-samples/Fs7.mp3",
  "A7": "/piano-samples/A7.mp3",
  "C8": "/piano-samples/C8.mp3"
};

const getNoteFromKeyboard = (key) => {
  const mapping = {
    'a': 'C4',
    'w': 'C#4',
    // ... other mappings
  };
  return mapping[key];
};

const Piano = () => {
  const NUM_OCTAVES = 7;

  const [isLoaded, setIsLoaded] = useState(false);
  const [sampler, setSampler] = useState(null);
  const [pressedKeys, setPressedKeys] = useState(new Set());
  const [recorder, setRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);

  // create a new Sampler and load the audio files
  useEffect(() => {
    const sampler = new Tone.Sampler(audioFiles, {
      onload: () => {
        setIsLoaded(true);
      }
    }).toDestination();

    const recorder = new Tone.Recorder();
    sampler.connect(recorder);
    sampler.volume.value = 0;
    //Destination.mute = true;

    setSampler(sampler);
    setRecorder(recorder);
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (sampler && !pressedKeys.has(event.key)) {
      const note = getNoteFromKeyboard(event.key);
      if (note) {
        sampler.triggerAttack(note);
        setPressedKeys(new Set(pressedKeys.add(event.key)));
      }
    }
  }, [sampler, pressedKeys]);

  const handleKeyUp = useCallback((event) => {
    if (sampler && pressedKeys.has(event.key)) {
      const note = getNoteFromKeyboard(event.key);
      if (note) {
        sampler.triggerRelease(note);
        const newPressedKeys = new Set(pressedKeys);
        newPressedKeys.delete(event.key);
        setPressedKeys(newPressedKeys);
      }
    }
  }, [sampler, pressedKeys]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  const startRecording = async () => {
    await Tone.start();
    recorder.start();
    setIsRecording(true);
  };

  const stopRecording = async () => {
    const recording = await recorder.stop();
    setRecording(URL.createObjectURL(recording));
    setIsRecording(false);
  };

  /*const playRecording = () => {
    const audio = new Audio(recording);
    audio.play();
  };

  const saveRecording = () => {
    const a = document.createElement('a');
    a.href = recording;
    a.download = 'piano-recording.mp3';
    a.click();
  };*/

  const clearRecording = () => {
    setRecording(null);
  };

  return (
    <div className='piano'>

      <div id={ (!isLoaded) ? "loading-msg" : "hide-loading-msg"}>
        <h1>Piano Audio Samples Loading...</h1>
      </div>

      <div className='piano-upper'>
        <Speaker />
        <Controls
          isRecording={isRecording}
          startRecording={startRecording}
          stopRecording={stopRecording}
          //playRecording={playRecording}
          //saveRecording={saveRecording}
          recording={recording}
          clearRecording={clearRecording}
        />
        <Speaker />
      </div>

      <div className='piano-wrap'>
        {Array.from({ length: NUM_OCTAVES }, (_, i) => (
          <Octave key={i} octave={i + 1} sampler={sampler} />
        ))}
      </div>

    </div>
  );
}

export default Piano;
