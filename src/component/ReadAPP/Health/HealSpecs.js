import React from 'react';
import { Typography, Fade } from '@material-ui/core';

export default function HealSpecs(props) {

    return (
        <React.Fragment>
            {props.map(({item, index }) => ( 
                <Fade in={true} timeout={800} key={index} >
                    <Typography>
                        {item.content}
                    </Typography>
                </Fade>
            ))
                
            }
        </React.Fragment>
    )
}
