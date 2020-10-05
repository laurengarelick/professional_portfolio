import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "../ProjectCard/ProjectCard"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "100px"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div id="workContainer" className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs>
          <Paper className={classes.paper}><Card/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Card/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Card/></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs>
          <Paper className={classes.paper}><Card/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Card/></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Card/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
