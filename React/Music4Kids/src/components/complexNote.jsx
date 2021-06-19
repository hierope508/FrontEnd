import { ItemTypes } from "./common/ItemTypes";
import { useDrag } from "react-dnd";
import React, { useState, useEffect } from "react";
import Note from "./note";
import { mobileCheck } from "./common/consts";

const ComplexNote = (props) => {
  
  const [duration, setDuration] = useState(props.duration);

  const [isPlaying, setIsPlaying] = useState(
    props.isPlaying ? props.isPlaying : false
  );

  useEffect(() => {
    if (duration) setDuration(duration);
  }, [duration]);

  const id = props.id;
  let {
    canDrag,
    noteName,
    frequency,
    enable,
    defaultImg,
    playingImg,
    origin,
  } = props;

  const inputProps = {};
  inputProps.type = "range";
  inputProps.className = "form-range";
  inputProps.min = "0.0";
  inputProps.max = "1";
  inputProps.step = "0.25";
  inputProps.id = id;
  inputProps.value = duration;
  inputProps.onChange = () => {
    const newDuration = document.getElementById(id).value;
    setDuration(newDuration);
  };

  if (!enable) inputProps.disabled = true;

  window.addEventListener("clickWithoutSound" + id, (event) => {
    let duration = document.getElementById(id).value;
    playNote(false, duration);
  });

  const playNote = (shouldReproduce, newDuration) => {
    if(!newDuration){
      newDuration = duration;   
    }
    
    if (shouldReproduce) {
      let audioContext = new (window.AudioContext ||
        window.webkitAudioContext ||
        window.mozAudioContext ||
        window.oAudioContext ||
        window.msAudioContext)();

      let o = audioContext.createOscillator();
      let g = audioContext.createGain();

      setIsPlaying(true);

      o = audioContext.createOscillator();
      o.frequency.value = frequency;
      o.connect(g);
      g.connect(audioContext.destination);
      o.type = "triangle";

      o.start(0);

      g.gain.exponentialRampToValueAtTime(
        0.00001,
        audioContext.currentTime + newDuration * 15
      );

      setTimeout(() => {
        o.stop();
        setIsPlaying(false);
      }, 500 * newDuration);
    } else {
      setIsPlaying(true);
      setTimeout(() => {
        setIsPlaying(false);
      }, 500 * newDuration);
    }
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.NOTE,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag: canDrag,
    item: {
      id: id,
      name: noteName,
      frequency: frequency,
      defaultImg: defaultImg,
      playingImg: playingImg,
      origin: origin,
      playNote: playNote,
      setIsPlaying: setIsPlaying,
    },
  }));

  const ontouchmove = (event) => {
    if (isDragging && mobileCheck()) {
      let div = document.getElementById(id + "_complex_2");

      if (!div) {
        div = document.getElementById(id + "_complex").cloneNode(true);
        div.id = div.id + "_2";
        div.left = document.getElementById(id + "_complex").left;
        div.top = document.getElementById(id + "_complex").top;
        document.getElementById("main").append(div);
      }

      let x = event.touches[0].clientX;
      let y = event.touches[0].clientY;
      div.style.position = "absolute";
      div.style.left = x - 30 + "px";
      div.style.top = y + 6 + "px";
    }
  };

  const onTouchEnd = () => {
    let div = document.getElementById(id + "_complex_2");

    if (div) div.remove();
  };

  return (
    <div
      id={id + "_complex"}
      onTouchMove={ontouchmove}
      onTouchEnd={onTouchEnd}
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <label for={id} type="range" className="form-label"></label>
      <input
        style={{ maxWidth: "100px", maxHeight: "100px" }}
        {...inputProps}
      ></input>
      <Note
        id={id}
        duration={duration}
        name={noteName}
        frequency={frequency}
        enable={enable}
        defaultImg={defaultImg}
        playingImg={playingImg}
        onClick={playNote}
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default ComplexNote;
