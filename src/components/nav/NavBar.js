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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: 0,
        height: "70px",
        background: 'none',
        border: 'none',
        boxShadow: 'none',
    },
    rootMenu: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpen, setOpen] = React.useState(false)
    const classes = useStyles();
    const [state, setState] = React.useState({
        isDarkMode: false,
    });

    const options = [
        'Home',
        'Frontend',
        'Hacking',
        'Backend',
        'DevOps'
    ]

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
        setOpen(false);

        if (options.includes(event.target.innerText)) {
            const view = Parse.parse(event.target.innerText);
            props.selectView(view);
        }

    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.onToggle(event.target.checked);
    }

    const handleNavClick = (event) => {
        const view = Parse.parse("Home");
        props.selectView(view);
    }

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.rootMenu}>
                <Typography onClick={handleNavClick} color={props.color} variant="h5" className={classes.title}>
                    Sample Name
                </Typography>
                <div className={classes.menu}>
                    <FormControlLabel
                        className={classes.toggle}
                        control={<BlackSwitch checked={state.isDarkMode} onChange={handleChange} name="isDarkMode" />}
                    />
                    <IconButton edge="start" color="inherit" classes={classes.dropdown} aria-label="menu" onClick={handleClick}>
                        <Hamburger toggled={isOpen} toggle={setOpen} color={(props.color === "primary" ? "#fff" : "#0c0c0c")} duration={0.6} />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Home</MenuItem>
                        <MenuItem onClick={handleClose}>Frontend</MenuItem>
                        <MenuItem onClick={handleClose}>Backend</MenuItem>
                        <MenuItem onClick={handleClose}>Hacking</MenuItem>
                        <MenuItem onClick={handleClose}>DevOps</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
}