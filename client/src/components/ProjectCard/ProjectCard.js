import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tilt from "react-parallax-tilt"

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
    },
    media: {
        height: 200,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Tilt transitionSpeed={1500} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.1}>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://hips.hearstapps.com/hmg-prod/images/delish-carbonara-1541534998.jpg"
                        title="Project #i"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Work Experience
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Doing this project helped
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Button size="small" color="secondary">
                        Learn More
        </Button>
                </CardActions>
            </Card>
        </Tilt>
    );
}
