import "./App.css";
import "./css/player.css";
import "./css/collapse.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import Player from "./components/player";
import NavBar from "./components/common/navbar";
import "fontsource-roboto";
// import NotesAccordion from "./components/common/notesAccordion";
import { mobileCheck } from "./components/common/consts";
import Challenge from "./components/challenge";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  const opts = {
    enableTouchEvents: true,
    enableMouseEvents: true,
    enableHoverOutsideTarget: true,
  };

  return (
    <div className="App" id="main">
      <NavBar></NavBar>
      <main>
        <div className="container-fluidr">
          <div
            className="player-container"
            style={{
              marginTop: "1%",
              marginLeft: mobileCheck() ? "10%" : "5%",
              // paddingLeft: mobileCheck() ? "0%" : "10%",
            }}
          >
            <DndProvider
              backend={mobileCheck() ? TouchBackend : HTML5Backend}
              options={opts}
            >
              <Switch>
                <Route path="/desafio/:id" component={Challenge}></Route>
                <Route exact path="/desafio" component={Challenge}></Route>
                <Route
                  path="/modolivre"
                  render={(props) => <><Player {...props} canDrop={true}  showNotesTrail={false} /> <Player {...props} canDrop={true} showNotesTrail={true} /></> }
                />
                <Redirect from="/" exact to="/modolivre" />
              </Switch>
            </DndProvider>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
