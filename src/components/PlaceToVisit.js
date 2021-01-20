import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import ImageCard from "./imageCard";
import places from "../static/places";
import useWindowsPosition from "../hook/useWindowsPosition";

const useStyles = makeStyles((theme) =>
    ({
        root: {
            minHeight: '100vh',
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
        },
    }));
export default function PlaceToVisit () {
    const classes = useStyles();
    const checked = useWindowsPosition('header');
    return (
        <div className={classes.root}>
            <ImageCard place={places[0]} checked ={checked} />
            <ImageCard place={places[1]} checked ={checked}/>
        </div>
    );
}
