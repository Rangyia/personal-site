import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Home.css'
import { Typography } from '@material-ui/core';
import Parse from '../../utils/MenuParser'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    menuItem: {
        cursor: 'pointer',
        textAlign: 'center'
    }
}));


export default function HomeView(props) {
    const classes = useStyles();

    const handleNavClick = (event) => {
        const view = Parse(event.target.innerText);
        props.selectView(view);
    }

    return (
        <div className={classes.root}>
            <div className={classes.menuContainer}>
                <Zoom in={true} style={{margin: 0, padding: 0}}>
                    <Typography className={classes.menuItem} color={props.color} variant="h1" onClick={handleNavClick}>Frontend</Typography>
                </Zoom>
                <Zoom in={true} style={{ transitionDelay: '250ms' }}>
                    <Typography className={classes.menuItem} color={props.color} variant="h1" onClick={handleNavClick}>Backend</Typography>
                </Zoom>
                <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                    <Typography className={classes.menuItem} color={props.color} variant="h1" onClick={handleNavClick}>Hacking</Typography>
                </Zoom>
                <Zoom in={true} style={{ transitionDelay: '750ms' }}>
                    <Typography className={classes.menuItem} color={props.color} variant="h1" onClick={handleNavClick}>DevOps</Typography>
                </Zoom>
            </div>
        </div>
    );
}
