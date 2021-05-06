import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'red',
    }
}));

export default function SideBar() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem>Frontend</ListItem>
            <ListItem>Backend</ListItem>
            <ListItem>Hacking</ListItem>
            <ListItem>Devops</ListItem>
        </List>
    )
}
