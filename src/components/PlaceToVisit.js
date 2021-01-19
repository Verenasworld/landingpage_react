import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import ImageCard from "./imageCard";
import places from "../static/places";

const useStyles = makeStyles((theme) =>
    ({
        root: {
            height: '100vh',
        },
    }));
export default function Visit () {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ImageCard place={places[0]}/>
        </div>
    );
}
