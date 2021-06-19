import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ComplexNote from "./../complexNote";
import { mobileCheck, allNotes } from "./../common/consts";

const useStyles = makeStyles((theme) => ({
  root: {
    width: mobileCheck() ? "180%" : "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function NotesAccordion() {
  const classes = useStyles();
  const duration = 1;

  const opts = {
    enableTouchEvents: true,
    enableMouseEvents: true,
    enableHoverOutsideTarget: true,
  };

  let currentIndex = 0;

  return (
    <div id="notes" className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Mostrar notas!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <table className="table-light">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <DndProvider
                  backend={mobileCheck() ? TouchBackend : HTML5Backend}
                  options={opts}
                >
                  {allNotes.map((n, index) => {
                    let current = allNotes[currentIndex];
                    let next =
                      currentIndex < allNotes.length - 1
                        ? allNotes[currentIndex + 1]
                        : null;

                    if (current == null || next == null) return null;

                    let renderNext = next != null;
                    if (renderNext) currentIndex = currentIndex + 2;

                    return (
                      <tr key={currentIndex + "_" + currentIndex}>
                        <td key={current.id}>
                          <div className="col">
                            <div className="row">
                              <ComplexNote
                                id={current.id}
                                noteName={current.name}
                                frequency={current.frequency}
                                enable={true}
                                duration={duration}
                                canDrag={true}
                                defaultImg={current.defaultImg}
                                playingImg={current.playingImg}
                              />
                            </div>
                          </div>
                        </td>
                        {renderNext ? (
                          <td>
                            <div className="col">
                              <div className="row">
                                <ComplexNote
                                  id={next.id}
                                  noteName={next.name}
                                  frequency={next.frequency}
                                  enable={true}
                                  duration={duration}
                                  canDrag={true}
                                  defaultImg={next.defaultImg}
                                  playingImg={next.playingImg}
                                />
                              </div>
                            </div>
                          </td>
                        ) : null}
                      </tr>
                    );
                  })}
                </DndProvider>
              </tbody>
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
