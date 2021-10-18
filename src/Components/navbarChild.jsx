import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    backgroundColor: "red",
  },
  appBar: {
    background: "	#FFFFFF",
  },
  buttonNavBar: {
    color: "black",
    fontSize: "large",
    boxShadow: "none",
    marginLeft: 20,
    borderBottomRightRadius: "0",
    borderBottomLeftRadius: "0",

    backgroundColor: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#FFFFF0",
      opacity: "30",
      borderBottom: "5px solid",
      borderBottomColor: "green",
    },
  },
}));

export default function NavBarChild() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="relative">
        <Toolbar>
          <Link style={{ color: "#FFFFFF" }} to="/menu">
            <Button className={classes.buttonNavBar}>Menu</Button>
          </Link>
          <Link style={{ color: "#FFFFFF" }} to="/specialMenu">
            <Button className={classes.buttonNavBar}>Special</Button>
          </Link>
          <Link style={{ color: "#FFFFFF" }} to="/rewards">
            <Button className={classes.buttonNavBar}>Rewards</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
