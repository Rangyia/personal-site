import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Home.css'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    menuItem: {
        cursor: 'pointer'
    }
}));

export default function HomeView(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div className={classes.root}>
            <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Show"
            />
            <div className={classes.menuContainer}>
                <Zoom in={checked} style={{margin: 0, padding: 0}}>
                    <Typography className={classes.menuContainer} color={props.color} variant="h1">Frontend</Typography>
                </Zoom>
                <Zoom in={checked} style={{ transitionDelay: checked ? '250ms' : '0ms' }}>
                    <Typography className={classes.menuContainer} color={props.color} variant="h1">Backend</Typography>
                </Zoom>
                <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                    <Typography className={classes.menuContainer} color={props.color} variant="h1">Hacking</Typography>
                </Zoom>
                <Zoom in={checked} style={{ transitionDelay: checked ? '750ms' : '0ms' }}>
                    <Typography className={classes.menuContainer} color={props.color} variant="h1">DevOps</Typography>
                </Zoom>
            </div>
        </div>
    );
}
