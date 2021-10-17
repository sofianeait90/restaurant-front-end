import { Grid, Paper } from "@material-ui/core";
import { useStyles as styles } from "../Styles/OrderMenuStyles";

const OrderMenu = () => {
  const classes = styles();
  return (
    <div>
      <Paper className={classes.paperMenu} variant="outlined">
        <Grid container spacing={3}>
          <Grid item xs={5} style={{ marginLeft: 30, marginTop: 20 }}></Grid>
          <Grid item xs={4}>
            4
          </Grid>
          <Grid item xs={10}>
            10
          </Grid>
          <Grid item xs={15}>
            15
          </Grid>
          <Grid item xs={10}>
            10
          </Grid>
          <Grid item xs={15}>
            15
          </Grid>
          <Grid item xs={8}>
            8
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default OrderMenu;
