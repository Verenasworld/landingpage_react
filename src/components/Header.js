import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Collapse, IconButton, Toolbar} from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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
        color:'#0163A0',
    },

    container:{
        textAlign:'center'
    },
    title:{

        fontSize:'4rem',
        fontFamily: 'Nunito',
        fontWeight: '200',
        backgroundColor: 'rgba(255,255,255, 0.7)',
        padding: '20px 100px 20px 100px'
    },
    goDown:{
        color: '#0163A0',
        fontSize: '4rem'
    }


}));


export default function Header(){
    const classes = useStyles();
    const [checked,setChecked] = useState(false)
    useEffect(()=>{
        setChecked(true)
    },[])
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
        <Collapse in={checked}
                  {...(checked ? { timeout: 1000 } : {})}
                  collapsedHeight={50}>
            <div className={classes.container}>
                <h2 className={classes.title}>
                    Welcome to <br/>My <span className={classes.colorText}>Island!</span>
                </h2>
                <IconButton>
                    <ExpandMoreIcon className={classes.goDown}/>
                </IconButton>

            </div>
        </Collapse>

    </div>;
}