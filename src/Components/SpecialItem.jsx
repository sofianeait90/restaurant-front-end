import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    width: "100%",
    minWidth: "500",
  },
  details: {
    display: "flex",

    // flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 300,

    height: 350,
    size: "cover",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function SpecialItem({ image }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <Grid container spacing={2}>
          <Grid item>
            <CardMedia
              className={classes.cover}
              image={image}
              title="Live from space album cover"
            />
          </Grid>
          <Grid item>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Soda Small Bootle
              </Typography>
              <Grid item>
                <Typography variant="subtitle1">2/$2.50</Typography>
              </Grid>
              <Grid item></Grid>

              <Typography component="h5" variant="h5">
                Soda Small Bootle
              </Typography>
              <Typography variant="subtitle1">2/$2.50</Typography>
              <p> includes sprite and pepsi and any juice. bottle 12 Oz</p>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}
