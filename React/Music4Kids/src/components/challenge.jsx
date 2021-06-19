import React, { Component } from "react";
import Player from "./player";
import { allNotes, challenges } from "./common/consts.js";

class Challenge extends Component {
  state = { challangeNumber: this.props.match.params.id, result: false};

  componentDidUpdate() {
    const number = window.location.pathname.replace("/desafio/", "");
    if (number !== this.state.challangeNumber){
      this.setState({ challangeNumber: number});
    }
  }

  checkResult = (answer) => {
    let challenge = challenges[this.state.challangeNumber - 1];
    let result = challenge.result[0];

    if (!answer.notes || answer.times != result.times) {
      alert("Você errou!");
      return;
    }

    for (let i = 0; i < answer.notes.length; i++) {
      if (
        answer.notes[i].name != result.notes[i].name ||
        answer.notes[i].duration != result.notes[i].duration
      ) {
        alert("Você errou!");
        return;
      }
    }

    alert("Você acertou!");
    this.setState({result:true});
  };

  changeChallenge = (delta) => {
    const newValue = Number(this.state.challangeNumber) + delta;

    if (newValue <= 0 || newValue > challenges.length) return;

    this.props.history.push(`/desafio/${newValue}`);
    this.setState({result:false});
  };

  render() {
    let challenge = challenges[this.state.challangeNumber - 1];
    let showResult = challenge.showResult || this.state.result ;
    let result = showResult
      ? challenge.result.map((n) => {
          if (!n.name) {
            return {
              id: Math.random() * 50 + "_Loop",
              notes: n.notes.map((note) => {
                return {
                  ...allNotes.filter((f) => f.name === note.name)[0],
                  id: `note_${note.name}_${note.duration}_${
                    this.state.challangeNumber
                  }_${challenge.notes.indexOf(note)}`,
                  duration: note.duration,
                };
              }),
              times: n.times,
            };
          }

          return null;
        })
      : [];

    let notes = challenge.notes.map((n) => {
      if (!n.name) {
        return {
          id: Math.random() * 50 + "_Loop",
          notes: n.notes.map((note) => {
            return {
              ...allNotes.filter((f) => f.name === note.name)[0],
              id: `note_${note.name}_${note.duration}_${
                this.state.challangeNumber
              }_${challenge.notes.indexOf(note)}`,
              duration: note.duration,
            };
          }),
          times: n.times,
        };
      }

      return {
        ...allNotes.filter((f) => f.name === n.name)[0],
        id: `note_${n.name}_${n.duration}_${
          this.state.challangeNumber
        }_${challenge.notes.indexOf(n)}`,
        duration: n.duration,
      };
    });

    return (
      <div>
        <h1>
          {" "}
          <mark>
            {this.state.challangeNumber == 1
              ? "MODELO / EXAMPLE "
              : "DESAFIO / CHALLENGE " + (this.state.challangeNumber - 1)}
          </mark>{" "}
        </h1>
        <button
          className="btn btn-secondary"
          onClick={() => this.changeChallenge(-1)}
        >
          {`<`}
        </button>
        <button
          className="btn btn-secondary"
          style={{display:this.state.result || this.state.challangeNumber == 1 ? "" : "none"}}
          onClick={() => this.changeChallenge(1)}
        >
          {`>`}
        </button>
        <h2 style={{ color: "whitesmoke", marginTop: "3%" }}>
          <mark>{challenge.message}</mark>
        </h2>
        <Player
          canDrop={false}
          notes={notes}
          enabled={false}
          isChallenge={true}
        ></Player>
        <Player
          canDrop={true}
          enabled={true}
          checkResult={this.checkResult}
          isChallenge={true}
          showNotesTrail={true}
          notes={
            showResult
              ? result
              : [{ id: Math.random() * 50 + "_Loop", times: 1 }]
          }
        />
      </div>
    );
  }
}

export default Challenge;
