import React from 'react';
import Sentence from './Sentence';
import { Typography, Grid, Paper } from '@material-ui/core';

export default function Post(props) {
    return (
        <React.Fragment>
            <Grid container lg={12} style={{paddingTop: '3vh'}}>
                <Paper style={{padding: '1rem', borderRadius: '1rem'}}
                       elevation={10}  
                >
                    <Typography variant='h5' style={{paddingLeft: '2rem'}} >
                        {props.postContent.title}
                    </Typography>
                    <Typography variant="caption" align='center' style={{paddingLeft: '2.3rem'}}> 
                        {props.postContent.date}
                    </Typography>
                    <Typography variant='body1' style={{marginTop: '1rem'}}>
                        {props.postContent.content.map(item => (
                            <Sentence sentence={item} />
                        ))}
                    </Typography>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}
