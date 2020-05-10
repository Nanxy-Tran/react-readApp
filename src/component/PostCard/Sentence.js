import React from 'react';
import {Typography} from '@material-ui/core';

export default function Sentence(props) {
    return (
        <React.Fragment>
            <Typography 
                    variant="body2"
                    display="block"
                    color="secondary"
                    align='justify'
                    style={{marginTop: '1rem', paddingLeft: '2rem', paddingRight: '2rem'}}
                >
                    {props.sentence}
                </Typography>           
        </React.Fragment>
    )
}
