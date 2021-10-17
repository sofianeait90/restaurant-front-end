import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 10,
    backgroundColor: "red",
    height: "3000",
  },
  appBar: { background: "	#AC1300", marginBottom: "2" },
  buttonNavBar: {
    color: "white",
    boxShadow: "none",
    marginBottom: 5,

    backgroundColor: "#AC1300",
    "&:hover": {
      backgroundColor: "#7A0101",
      opacity: "30",
    },
  },
  buttonSignUP: {
    color: "white",
    boxShadow: "none",
    marginBottom: 5,
    opacity: "30",

    backgroundColor: "#7A0101",
    "&:hover": {
      backgroundColor: "#7A0101",
      opacity: "30",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Link to="/">
            <LocalPizzaIcon style={{ color: "white" }}></LocalPizzaIcon>
          </Link>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link style={{ color: "#AC1300" }} to="/order">
              <Button className={classes.buttonNavBar}>START YOUR ORDER</Button>
            </Link>
            <Link style={{ color: "#AC1300" }} to="/signIn">
              <Button
                className={classes.buttonNavBar}
                data-container="body"
                data-toggle="popover"
                data-placement="bottom"
                data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus."
              >
                SIGN IN
              </Button>
            </Link>
            <Link style={{ color: "#AC1300" }} to="/signUp">
              <Button className={classes.buttonSignUP}>SIGN UP</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
