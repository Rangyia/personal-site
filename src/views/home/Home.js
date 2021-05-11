import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import './styles.css'
import { Typography } from '@material-ui/core';
import Parse from '../../utils/MenuParser';
import { GitHub, LinkedIn, Twitter, Email } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    menuItem: {
        cursor: 'pointer',
        textAlign: 'center'
    },
    socialIconList: {
        display: 'flex',
        marginBottom: '20px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '5px',
        paddingTop: '5px',
        backgroundColor: '#fff'
    },
    socialIcon: {
        fontSize: '48px',
        cursor: 'pointer'
    }
}));


export default function HomeView(props) {
    const classes = useStyles();

    const handleNavClick = (event) => {
        const view = Parse.parse(event.target.innerText);
        props.selectView(view);
    }

    return (
        <div className={classes.root}>
            <Typography color={props.color} variant="h4" style={{marginTop: "50px"}}>Full-Stack</Typography>
            <Typography color={props.color} variant="h4" style={{ marginBottom: "50px"}}>Web Developer</Typography>
            <div className={classes.socialIconList}>
                <a href="https://github.com/Rangyia">
                    <GitHub className={classes.socialIcon} />
                </a>
                <a href="https://www.linkedin.com/in/jess-graham-a6a489141/">
                    <LinkedIn className={classes.socialIcon} />
                </a>
                <a href="https://twitter.com/rangyia">
                    <Twitter className={classes.socialIcon} />
                </a>
                <a href="mailto:jess@jessgraham.me">
                    <Email className={classes.socialIcon} />
                </a>
            </div>
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
