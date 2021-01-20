import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import Header from "./components/Header";
import PlaceToVisit from "./components/PlaceToVisit";

const useStyles = makeStyles((theme) => ({
        root: {
            minHeight: '100vh',
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/test_bild.jpg"})`,
            backgroundRepeat  : 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: "right"
        }
}));


export default function App(){
    const classes = useStyles();
    return <div className={classes.root}>
        <CssBaseline/>
        <Header/>
        <PlaceToVisit/>

    </div>
};
