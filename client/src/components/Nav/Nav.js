import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '@material-ui/core/Button';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import pdf from "../../assets/LaurensplaceholderResume.pdf"

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);


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
      <AppBar position="fixed" color="white">
        <Toolbar style={{ justifyContent: "space-evenly" }}>
          <Typography variant="h4" color="inherit" style={{ display: "inline" }}>
          <AnchorLink style={{ textDecoration: "none" }} href="#workContainer">
            <Button>
              Work
            </Button>
            </AnchorLink>
          </Typography>
          <Typography variant="h3" color="inherit" style={{ display: "inline" }}>
            <LightTooltip title="Check out my Resume">
              <a style={{ textDecoration: "none" }} href={pdf} target="_blank">
                <Button>
                  LAUREN GARELICK
                </Button>
              </a>
            </LightTooltip>
          </Typography>
          <Typography variant="h4" color="inherit" style={{ display: "inline" }}>
            <AnchorLink style={{ textDecoration: "none" }} href="#gridsContainer"><Button>About</Button></AnchorLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
