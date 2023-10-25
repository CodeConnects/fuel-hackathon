// This component renders a single piano key.
// It has an onMouseDown function that triggers a note on the pianoSampler.
// It has onMouseUp and onMouseOut functions that releases a note on the pianoSampler.
// Keyboard button press handlers are in the Piano component.
// The key displays with a color class plus a note name and octave label.

const PianoKey = ({ color, note, sampler }) => {

  const handleMouseDown = () => {
    sampler.triggerAttack(note);
  };

  const handleMouseUp = () => {
    sampler.triggerRelease(note);
  };

  const handleMouseOut = () => {
    sampler.triggerRelease(note);
  };

  return (
    <div className={`key ${color}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOut={handleMouseOut}
    >
      <span>{note}</span>
    </div>
  );
};

export default PianoKey;
