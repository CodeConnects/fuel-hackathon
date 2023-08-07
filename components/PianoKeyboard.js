function PianoKeyboard(props) {

  return (
    <div className="piano-keyboard">
      <div className="white-key"></div>
      <div className="black-key"></div>
      <div className="white-key"></div>
      <div className="black-key"></div>
      <div className="white-key"></div>
      <div className="white-key"></div>
      <div className="black-key"></div>
      <div className="white-key"></div>
      <div className="black-key"></div>
      <div className="white-key"></div>
      <div className="black-key"></div>
      <div className="white-key"></div>
    </div>
  );


  /*const { notes, onNoteClick } = props;

  return (
    <div className="piano-keyboard">
      {notes.map((note) => (
        <PianoKey
          key={note}
          note={note}
          onClick={onNoteClick}
        />
      ))}
    </div>
  );*/
}

export default PianoKeyboard;
