import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import './styles.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        transitionDelay: '500'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function RepoCard(props) {
    const classes = useStyles();

    return (
            <a href={props.link}>
                <Zoom in={true} style={{ transitionDelay: '250ms' }}>
                        <Card className={classes.root}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        {props.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {props.description}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {props.language}
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    className={classes.cover}
                                    image="/static/images/cards/live-from-space.jpg"
                                    title="Live from space album cover"
                                />
                            </div>
                        </Card>
                </ Zoom>
            </a>
    );
}