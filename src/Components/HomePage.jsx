import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";

import GridSpecial from "./gridSpecial";
import pizzaImage from "../Images/pizzaImage.jpg";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 440,
    marginLeft: 65,
    color: "white",
    boxShadow: "none",
    marginBottom: 5,
    opacity: "30",
    borderRadius: 30,

    backgroundColor: "#000000",
    "&:hover": {
      backgroundColor: "#000000",
      opacity: "30",
    },
  },

  Card: {
    cursor: "pointer",
    backgroundImage: `url(${pizzaImage})`,
    backgroundSize: "cover",
    height: 500,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
  Carousel: {
    marginTop: 30,
    height: 200,
    width: 500,
  },
}));

const cardHandleClick = () => {
  console.log("card Cliked ");
};
const HomePage = () => {
  const classes = useStyles();

  return (
    <div>
      <Card key="1" className={classes.Card} onClick={() => cardHandleClick()}>
        <Button variant="contained" color="primary" className={classes.button}>
          ORDER DELIVERY
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            console.log("button cliked");
          }}
        >
          ORDER carriot
        </Button>
      </Card>

      <GridSpecial />
    </div>
  );
};

export default HomePage;
