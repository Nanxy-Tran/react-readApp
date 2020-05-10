import React from 'react'
import { Typography, Grid, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const CardTheme = makeStyles({
    cardContent: {
        paddingLeft: '0.5rem',
        height: '5rem'
    },
    cardAvater: {

    },
})

export default function CardSideBar(props) {
    const classes = CardTheme();
    return (
        <React.Fragment>
            <Grid container lg={12}>
                <Grid item lg={2} >
                    <Avatar src={props.icon} 
                            style={{paddingTop: '1rem', margin:'auto'}}
                    />
                </Grid>
                <Grid item lg={10} className={classes.cardContent}>
                    <Typography variant="subtitle1">
                        {props.title}
                    </Typography>
                    <Typography variant="caption">
                        {props.content}
                    </Typography>                    
                </Grid>               
            </Grid>                        
        </React.Fragment>
    )
}
