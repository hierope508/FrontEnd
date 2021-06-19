import "./../css/loop.css";
import { useState } from "react";
import { useEffect } from "react";
import ComplexNote from "./complexNote";
import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./common/ItemTypes";
import { mobileCheck } from "./common/consts";

function Loop(props) {
  const [notes, setNotes] = useState(props.notes ? props.notes : []);
  const [times, setTimes] = useState(props.times ? props.times : 1);
  const { id, canDrop, canDrag, playLoop, playNote } = props;
  let addNotes = props.addNotes;
  
  useEffect(() => {
    if (props.notes) {
      setNotes([...props.notes]);
    }
  }, [props.notes]);

  const [{ isDragging }, onDragLoop] = useDrag(() => ({
    type: ItemTypes.NOTE,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag: canDrag,
    item: {
      id: Math.random() * 50 + "_Loop",
    },
  }));

  const [, onDropLoop] = useDrop(() => ({
    accept: ItemTypes.NOTE,
    canDrop: (item, monitor) => {
      return canDrop;
    },
    drop: (item, monitor) => {
      if (monitor.didDrop() || !item.name) return;
      var newNote = {
        id: Math.random() * 50 + "_loop",
        name: item.name,
        frequency: item.frequency,
        duration: document.getElementById(item.id).value,
        defaultImg: item.defaultImg,
        playingImg: item.playingImg,
        playNote: item.playNote,
        setIsPlaying: item.setIsPlaying,
        isPlaying: false,
      };
      setNotes((notes) => [...notes, newNote]);
    },
  }));

  const handleOnChange = (e) => {
    let inputValue = document.getElementById(`input_repeat_${id}`).value;
    if (canDrop && inputValue > 0 && inputValue <= 10) {
      setTimes(inputValue);
    }
  };

  const handleIncrement = (value) => {
    const newValue = times + value;
    if (newValue > 0 && newValue <= 10) setTimes(newValue);
  };

  const handlePlayLoop = async (event) => {
    if (event.cancelable) return;
    
    if(addNotes)
      addNotes({notes : notes, times: times});
    
    for (let i = 0; i < times; i++) {
      await playLoop(notes);
    }
  };

  const checkNoteOrLoop = (n) => {
    if (n.name) {
      return (
        <ComplexNote
          id={n.id}
          noteName={n.name}
          frequency={n.frequency}
          duration={n.duration}
          enable={canDrop}
          canDrag={false}
          origin="notes-place-holder"
          defaultImg={n.defaultImg}
          playingImg={n.playingImg}
          isPlaying={n.isPlaying}
        />
      );
    } else {
      return (
        <Loop
          id={n.id}
          canDrop={true}
          canDrag={false}
          playLoop={playLoop}
          playNote={playNote}
        />
      );
    }
  };

  window.addEventListener("click_" + id, (event) => {
    if (event.cancelable){
      let notesArray = [];

      for (let i = 0; i < notes.length; i++) {
        notesArray.push({name: notes[i].name, duration: document.getElementById(notes[i].id).value});
      }

      if(notes)
        addNotes({notes : notesArray, times: times});
    }else{
      handlePlayLoop(event);
    }
    
  });

  return (
    <div
      ref={canDrop ? onDropLoop : onDragLoop}
      className="col"
      style={{ minWidth: "100%", marginRight: "100%", marginTop:"5%" }}
      onClick={handlePlayLoop}
    >
      <h2
        className="col"
        style={{
          marginLeft: "-5%",
          color: "#FF007F",
          display: notes.length > 0 ? "none" : "block",
        }}
      >
        <mark>Repeat!</mark>
      </h2>

      <div
        id={id}
        className="row"
        style={{
          borderStyle: "dotted",
          minHeight: "100px",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <div className="input-group">
          <button
            className="btn btn-dark botao col-3"
            onClick={() => handleIncrement(-1)}
          >
            -
          </button>
          <input
            id={`input_repeat_${id}`}
            type="number"
            step="1"
            max="5"
            min="1"
            value={times}
            name="quantity"
            className="quantity-field"
            onChange={handleOnChange}
          />
          <button
            className="btn btn-primary botao col-3"
            onClick={() => handleIncrement(1)}
          >
            +
          </button>
        </div>
        {notes.map((n) => {
          return (
            <div
              key={`${n.id}`}
              className="row note-place-holder"
              style={{
                marginRight: mobileCheck() ? "-0.82%" : "-2.5%",
                marginLeft: mobileCheck() ? "" : "1px",
              }}
            >
              <div className="col">{checkNoteOrLoop(n)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Loop;
