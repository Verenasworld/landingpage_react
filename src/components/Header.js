import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar} from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';


const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height: '100vh',

    },
    appbar:{
        background: 'none',
        fontFamily: 'Nunito',
        fontWeight: '200',
    },
    icon:{
        fontSize: '2rem',
    },
    appbarTitle:{
        flexGrow: 1,
    },
    appbarWrapper:{
        width:"90%",
        margin: '0 auto'
    },
    colorText:{
        color:' #0163A0',
    },
    title:{

        fontSize:'50px',
        fontFamily: 'Nunito',
        fontWeight: '200',
        backgroundColor: 'rgba(255,255,255, 0.8)',
        padding: '20px 50px 20px 50px'
    }


}));


export default function Header(){
    const classes = useStyles();
    return <div className={classes.root}>
        <AppBar className={classes.appbar} elevation={0}>
           <Toolbar className={classes.appbarWrapper}>
               <h1 className={classes.appbarTitle}>
                  MY<span className={classes.colorText}>ISLAND</span>
               </h1>
               <iconButton>
                   <SortIcon className={classes.icon}/>
               </iconButton>
           </Toolbar>
        </AppBar>
        <div>
            <h2 className={classes.title}>
                Welcome to <br/>My <span className={classes.colorText}>Island!</span>
            </h2>
        </div>
    </div>;
}