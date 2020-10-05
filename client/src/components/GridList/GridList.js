import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from './tileData'
import "./GridList.css"
import Typed from 'typed.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100%",
    height: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  tileOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 50,
    background:"black",
    opacity: 0,
  
  },
  tileHoverText: {
    color: "whitesmoke",
    position: "absolute",
    padding: 100,
    zIndex: 50,

  },
  icon: {
    color: 'white',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const hoverText = [
  ["mommimg isn't easy", "it's a pretty good job though", "possibly my favorite one so far"],
  ["craft bartender", "10+ years experience"],
  ["disneyland!"],
  ["disneyland!"],
  ["personal trainer", "former tumbling & cheer coach", "7 years experience"],
  ["first full stack application", "utilized MERN stack"]
]


export default function AdvancedGridList() {
  const classes = useStyles();
  const [hover, setHover] = useState(null);

  useEffect(()=> {

    document.getElementById("gridsContainer").scrollIntoView({behavior: "smooth"})
  }, []);


  useEffect(()=> {
    if(hover != null){
       const options = {
      strings: hoverText[hover] || ['placeholder', "text"],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true,
      backDelay: 800,
    };
    const typed = new Typed(`#grid${hover}`, options);
    }
  },[hover])
    

  return (
    <div className={classes.root} id="gridsContainer">
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map((tile,i) => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={3}>
            <img src={tile.img} alt={tile.title} />
            <div className={classes.tileOverlay} onMouseEnter={()=> {
              console.log("hovering, ", i)
              setHover(i)}}>
              <h2 className={classes.tileHoverText} id={`grid${i}`}></h2>

            </div>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}