import { ItemTypes } from "./common/ItemTypes";
import React, { useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import "../css/player.css";
import ComplexNote from "./complexNote";
import { allNotes, mobileCheck } from "./common/consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Loop from "./loop";

function Player(props) {
  let stopImg = require("./../resources/stop-button-svgrepo-com.svg");
  const isChallenge = props.isChallenge;
  const [notes, setNotes] = useState(props.notes ? props.notes : []);
  let answer = {};

  let stop = false;

  const canDropProp = props.canDrop;
  const { checkResult, showNotesTrail } = props;

  let isPlaying = false;
  let isLoopPlaying = false;
  let audioContext = new (window.AudioContext ||
    window.webkitAudioContext ||
    window.mozAudioContext ||
    window.oAudioContext ||
    window.msAudioContext)();

  const canDrop = (item, monitor) => {
    return canDropProp && item.origin !== "notes-place-holder";
  };

  const canDropPlayer = (item, monitor) => {
    return canDropProp && item.origin === "notes-place-holder";
  };

  const renderNotesTray = () => {
    if (showNotesTrail) {
      return (
        <div className="row" id={"notes-animation"}>
          <div className="row note-place-holder">
            <Loop canDrop={false} notes={[]} canDrag={true}></Loop>
          </div>
          {allNotes.map((note) => {
            return (
              <div
                className="row note-place-holder"
                key={allNotes.indexOf(note) + "2"}
                style={{ marginRight: mobileCheck() ? "-0.82%" : "-0.4%" }}
              >
                <div className="col">
                  <ComplexNote
                    id={note.id * 2}
                    noteName={note.name}
                    frequency={note.frequency}
                    duration={1}
                    enable={true}
                    canDrag={true}
                    defaultImg={note.defaultImg}
                    playingImg={note.playingImg}
                    isPlaying={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    if (props.notes) {
      setNotes([...props.notes]);
    }
  }, [props.notes]);

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.NOTE,
    canDrop: canDrop,
    drop: (item, monitor) => {
      if (monitor.didDrop()) return;

      var newNote = item.name
        ? {
            id: Math.random() * 50,
            name: item.name,
            frequency: item.frequency,
            duration: document.getElementById(item.id).value,
            defaultImg: item.defaultImg,
            playingImg: item.playingImg,
            playNote: item.playNote,
            setIsPlaying: item.setIsPlaying,
            isPlaying: false,
          }
        : { id: Math.random() * 50 };

      setNotes((notes) => [...notes, newNote]);
    },
  }));

  const [, onDrop] = useDrop(() => ({
    accept: ItemTypes.NOTE,
    canDrop: canDropPlayer,
    drop: (item, monitor) => {
      removeNote(item);
    },
  }));

  const removeNote = (item) => {
    setNotes((notes) =>
      notes.length === 1 ? [] : notes.filter((n) => n.id !== item.id)
    );
  };

  const playNote = (note, duration, changeStatus) => {
    if (changeStatus) note.setIsPlaying(true);

    let o = audioContext.createOscillator();
    let g = audioContext.createGain();

    o = audioContext.createOscillator();
    o.frequency.value = note.frequency;
    o.connect(g);
    g.connect(audioContext.destination);
    o.type = "triangle";
    o.start(0);

    g.gain.exponentialRampToValueAtTime(
      0.00001,
      audioContext.currentTime + duration * 15
    );

    setTimeout(() => {
      o.stop();
      if (changeStatus) note.setIsPlaying(false);
    }, 500 * duration);
  };

  const handlePlayLoop = async (notesLoop) => {
    isLoopPlaying = true;
    for (let i = 0; i < notesLoop.length; i++) {
      if (stop) {
        stop = false;
        break;
      }

      if (!notesLoop[i].name) {
        let clickEvent = new Event("click_" + notesLoop[i].id, {
          view: window,
          bubbles: true,
          cancelable: false,
          reproduce: false,
        });

        document.getElementById(notesLoop[i].id).dispatchEvent(clickEvent);

        await timeout(500);

        continue;
      }

      // let frequency = notes[i].frequency;
      let duration = document.getElementById(notesLoop[i].id).value;

      let clickEvent = new Event("clickWithoutSound" + notesLoop[i].id, {
        view: window,
        bubbles: true,
        cancelable: false,
        reproduce: false,
      });

      document
        .getElementById(notesLoop[i].id + "_note")
        .childNodes[0].dispatchEvent(clickEvent);

      playNote(notesLoop[i], duration, false);

      await timeout(duration * 500);
    }

    isLoopPlaying = false;
  };

  const checkNoteOrLoop = (n) => {
    if (n.name) {
      return (
        <ComplexNote
          id={n.id}
          noteName={n.name}
          frequency={n.frequency}
          duration={n.duration}
          enable={canDropProp}
          canDrag={true}
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
          canDrop={canDropProp}
          canDrag={canDropProp}
          playLoop={handlePlayLoop}
          playNote={handlePlayNote}
          notes={n.notes}
          times={n.times}
          addNotes={handleAddNotes}
        />
      );
    }
  };

  const handlePlayNote = async (n) => {
    while (isLoopPlaying) {
      await timeout(500);
    }

    if (!n.name) {
      let clickEvent = new Event("click", {
        view: window,
        bubbles: true,
        cancelable: false,
        reproduce: false,
      });

      document.getElementById(n.id).dispatchEvent(clickEvent);

      await timeout(500);

      return;
    }

    let duration = document.getElementById(n.id).value;

    let clickEvent = new Event("clickWithoutSound" + n.id, {
      view: window,
      bubbles: true,
      cancelable: false,
      reproduce: false,
    });

    document
      .getElementById(n.id + "_note")
      .childNodes[0].dispatchEvent(clickEvent);

    playNote(n, duration, false);

    await timeout(duration * 500);
  };

  const handleAddNotes = (answerLoop) =>{
    if(notes.length === 1)
      answer = answerLoop;
  }

  const handleCheckResult = () =>{
    
    if (!notes[0].name) {
      let clickEvent = new Event("click_" + notes[0].id, {
        view: window,
        bubbles: true,
        cancelable: true,
        reproduce: false,
      });

      document.getElementById(notes[0].id).dispatchEvent(clickEvent);
    }
  }

  return (
    <div className="container player">
      <div
        style={{
          marginTop: "5%",
          marginBottom: "2%",
          display: showNotesTrail && isChallenge ? "" : "none",
        }}
      >
        <button
          className="btn btn-success"
          onClick={() => {
            if (checkResult){
              handleCheckResult(); 
              timeout(1000);
              checkResult(answer);
            }
          }}
        >
          VERIFICAR / CHECK
        </button>
      </div>
      <div className="row">
        <div className="player-btn">
          <button
            type="button"
            className="btn btn-success"
            onClick={async () => {
              if (isPlaying) {
                stop = true;
                return;
              }

              for (let i = 0; i < notes.length; i++) {
                console.log("stop: " + stop);
                if (stop) {
                  stop = false;
                  break;
                }

                isPlaying = true;
                await handlePlayNote(notes[i]);
                isPlaying = false;
              }
            }}
            style={{ minHeight: "32px", minWidth: "128px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="32"
              fill="currentColor"
              className="bi bi-play"
              viewBox="0 0 16 16"
              style={{ display: isPlaying ? "none" : "" }}
            >
              <path d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"></path>
            </svg>

            <img
              src={stopImg.default}
              style={{
                maxHeight: "32px",
                maxWidth: "128px",
                display: isPlaying ? "" : "none",
              }}
              alt="stop"
            ></img>
          </button>
        </div>
        <div className="col-2" ref={onDrop}>
          <FontAwesomeIcon
            icon={faTrash}
            size="3x"
            color="grey"
            onClick={() => {
              setNotes((notes) => []);
            }}
            style={{ cursor: "pointer", display: canDropProp ? "" : "none" }}
          />
        </div>
        <div className="row">
          <h1
            style={{
              display: canDropProp && isChallenge ? "" : "none",
              fontSize: mobileCheck() ? "110%" : "180%",
            }}
          >
            <mark>ELES TÊM O MESMO SOM? / DO THEY SOUND THE SAME?</mark>
          </h1>
        </div>
      </div>

      <div className="row player-notes" ref={drop}>
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
      {renderNotesTray()}
    </div>
  );

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
}

export default Player;
