import React from 'react'
import { List, ListItem, Typography } from '@material-ui/core';
import './styles.css'

import Parser from '../../utils/MenuParser'

export default function SideBar(props) {

    const handleNavClick = (event) => {
        const view = Parser.parse(event.target.innerText);
        props.selectView(view);
    }

    return (
        <List className="side-nav" styles={{ borderColor: "red" }}>
            <ListItem selected={props.selectedView["home"]} className="side-nav-item">
                <Typography onClick={handleNavClick} color={props.color} variant="h6">Home</Typography>
            </ListItem>
            <ListItem selected={props.selectedView["frontend"]} className="side-nav-item">
                <Typography onClick={handleNavClick} color={props.color} variant="h6">Frontend</Typography>
            </ListItem>
            <ListItem selected={props.selectedView["backend"]} className="side-nav-item">
                <Typography onClick={handleNavClick} color={props.color} variant="h6">Backend</Typography>
            </ListItem>
            <ListItem selected={props.selectedView["hacking"]} className="side-nav-item">
                <Typography onClick={handleNavClick} color={props.color} variant="h6">Hacking</Typography>
            </ListItem>
            <ListItem selected={props.selectedView["devops"]} className="side-nav-item">
                <Typography onClick={handleNavClick} color={props.color} variant="h6">DevOps</Typography>
            </ListItem>
        </List>
    )
}
