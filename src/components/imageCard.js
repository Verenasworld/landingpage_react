import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: 'rgba(0,0,0,0.5)'


    },
    media: {
        height: 440,
    },
    title:{
        fontFamily: 'Roboto',
        fontWeight: "bold",
        fontSize: '2rem',
        color: 'white',
    },
    desc:{
        fontFamily: 'Roboto',
        fontSize: '1,2rem',
        color: '#ddd',
    }
});

export default function ImageCard(place) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={place.imageURL}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        gutterBottom variant="h5"
                        component="h2"
                        className={classes.title}>
                        {place.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.desc}>
                        {place.description}
                    </Typography>
                </CardContent>


        </Card>
    );
}