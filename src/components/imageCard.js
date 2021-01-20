import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 700,
        background: 'rgba(0,57,92,0.6)',
        margin: '20px',
    },
    media: {
        height: 300,
        boxShadow:'5px 3px 10px #00395C',
        '&:hover':{
            transition: 'height 2s',
            boxShadow:'5px 3px 10px #7FCDCD',
            height: 350
        }
    },

    title: {
        fontFamily: 'Roboto',
        fontWeight: 'thin',
        fontSize: '2rem',
        color: '#fff',
    },
    desc: {
        fontFamily: 'Roboto',
        fontSize: '1.1rem',
        color: '#ddd',
    },
});

export default function ImageCard({ place, checked }) {
    const classes = useStyles();

    return (
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={place.imageUrl}
                    title="Contemplative Reptile"


                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h1"
                        className={classes.title}
                    >
                        {place.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.desc}
                    >
                        {place.description}
                    </Typography>
                </CardContent>
            </Card>
        </Collapse>
    );
}