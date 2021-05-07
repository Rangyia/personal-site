import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { grey } from '@material-ui/core/colors';
import { Sling as Hamburger } from 'hamburger-react'
import Switch from '@material-ui/core/Switch';
import Parse from '../../utils/MenuParser'
// import { GitHub, LinkedIn, Email, Twitter } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        background: 'none',
        border: 'none',
        boxShadow: 'none',
    },
    rootMenu: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    socialIconList: {
        display: 'flex',
        alignItems: 'center'
    },
    socialIcon: {
        margin: '0px 5px',
        cursor: 'pointer'
    },
    menu: {
        display: 'flex'
    },
    title: {
        cursor: 'pointer',
    },
    dropdown: {
        margin: 0,
        padding: 0,
    },
    toggle: {
        margin: 0
    }
}));

const BlackSwitch = withStyles({
    switchBase: {
        color: "#0c0c0c",
        '&$checked': {
            color: grey[200],
        },
        '&$checked + $track': {
            backgroundColor: grey[200],
        },
        '&$label': {
            color: "red",
        },
    },
    checked: {},
    track: {
        '&$track': {
            backgroundColor: "#0c0c0c",
        },
    },
})(Switch);

export default function NavBar(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        isDarkMode: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.onToggle(event.target.checked);
    }

    const handleNavClick = (event) => {
        const view = Parse("Home");
        props.selectView(view);
    }

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.rootMenu}>
                <Typography onClick={handleNavClick} color={props.color} variant="h5" className={classes.title}>
                    Jess Graham
                </Typography>
                <div className={classes.menu}>
                    <FormControlLabel
                        className={classes.toggle}
                        control={<BlackSwitch checked={state.isDarkMode} onChange={handleChange} name="isDarkMode" />}
                    />
                    <IconButton edge="start" color="inherit" classes={classes.dropdown} aria-label="menu">
                        <Hamburger color={(props.color === "primary" ? "#fff" : "#0c0c0c")} duration={0.6} />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}