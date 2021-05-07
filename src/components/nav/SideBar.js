import React from 'react'
import { List, ListItem, Typography } from '@material-ui/core';
import './styles.css'

import Parse from '../../utils/MenuParser'

export default function SideBar(props) {

    const handleNavClick = (event) => {
        const view = Parse(event.target.innerText);
        props.selectView(view);
    }

    return (
        <List className="side-nav">
            <ListItem selected={true} className="side-nav-item">
                <Typography onClick={handleNavClick} color={props.color} variant="h6">Frontend</Typography>
            </ListItem>
            <ListItem className="side-nav-item">
                <Typography onClick={handleNavClick} color={props.color} variant="h6">Backend</Typography>
            </ListItem>
            <ListItem className="side-nav-item">
                <Typography onClick={handleNavClick} color={props.color} variant="h6">Hacking</Typography>
            </ListItem>
            <ListItem className="side-nav-item">
                <Typography onClick={handleNavClick} color={props.color} variant="h6">DevOps</Typography>
            </ListItem>
        </List>
    )
}
