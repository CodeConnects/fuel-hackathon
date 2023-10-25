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
