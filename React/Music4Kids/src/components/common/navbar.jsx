import React from "react";
import {makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink, useHistory } from "react-router-dom";
import "./../../css/navbar.css";
import { challenges } from "./consts";
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };


  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();

      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleOnClick = (destiny) => {
    history.push(destiny);
  };

  return (
    <div className={(classes.root, "menus")}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink
              className="navbar-brand"
              activeStyle={{ fontWeight: "bold", color: "white" }}
              to="/"
            >
              MODO LIVRE
            </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Button
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              // onClick={handleToggle}
              onClick={() => handleOnClick(`/desafio/1`)}
              style={{color:"white", fontWeight: "bold"}}
            >
              <Typography
                variant="h6"
                activeStyle={{ fontWeight: "bold", color: "white" }}
              >
                DESAFIOS
              </Typography>
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        {challenges.map((c) => {
                          return (
                            <MenuItem
                              className="navbar-brand"
                              activeStyle={{ fontWeight: "", color: "white" }}
                              onClick={(e) =>{
                                handleOnClick(
                                  `/desafio/${challenges.indexOf(c) + 1}`
                                );
                                handleClose(e);
                              }
                              }
                            >
                              <p style={{ fontSize: "small" }}>
                                {challenges.indexOf(c) === 0
                                  ? "MODELO "
                                  : "DESAFIO " + challenges.indexOf(c)}
                              </p>
                            </MenuItem>
                          );
                        })}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
