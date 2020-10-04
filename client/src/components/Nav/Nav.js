import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar style={{justifyContent:"space-evenly"}}>
            <Typography  color="inherit" style={{display:"inline"}}>
            <Button>
                Work
            </Button>
          </Typography>
          <Typography variant="h5" color="inherit" style={{display:"inline"}}>
            LAUREN GARELICK
          </Typography>
          <Typography variant="h4" color="inherit" style={{display: "inline"}}>
            <AnchorLink href="#gridsContainer"><Button>About</Button></AnchorLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
