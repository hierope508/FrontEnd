import "../css/note.css";

const Note = (props) => {
    
  const { name, duration, defaultImg, playingImg, isPlaying } = props;
  const id = props.id ? props.id + "_note" : "-1";
  const handleOnClick = props.onClick;
  let noteimg;

  if (isPlaying) noteimg = require(`./../resources/${playingImg}`);
  else noteimg = require(`./../resources/${defaultImg}`);

  return (
    <div style={{ width: 50 + 100 * duration }} id={id}>
      <button
        onClick={handleOnClick}
        type="button"
        className={`btn btn-primary note ${name}`}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={`Nota ${name}`}
      >
        <img
          alt={name}
          draggable="false" 
          src={noteimg.default}
          width="50%"
          style={{
            border: "2px solid #FFFF",
            borderRadius: "55%",
            marginRight: "5%",
          }}
        ></img>
        {name}
      </button>
    </div>
  );
};

export default Note;
