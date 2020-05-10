import React from 'react';
import { Typography, Fade } from '@material-ui/core';

export default function WeatherSpec(props) {

    return (
        <React.Fragment>
            {props.index === 0 ?
                <Fade in={true} timeout={800} >
                    <Typography 
                        align='center'
                        color="textSecondary"
                        variant="body1"
                    >
                        {props.content}
                    </Typography>
                </Fade> : <div> </div>
            }
            {props.index === 1 ?
                <Fade in={true} timeout={800} >
                    <Typography
                        align='center'
                        color="textSecondary"
                        variant="body1"
                    >
                        {props.content}
                    </Typography>
                </Fade> : <div> </div>
            }
            {props.index === 2 ?
                <Fade in={true} timeout={800} >
                    <Typography
                        align='center'
                        color="textSecondary"
                        variant="body1"
                    >
                        {props.content}
                    </Typography>
                </Fade> : <div> </div>
            }
            {props.index === 3 ?
                <Fade in={true} timeout={800} >
                    <Typography
                        align='center'
                        color="textSecondary"
                        variant="body1"
                    >
                        {props.content}
                    </Typography>
                </Fade> : <div> </div>
            }
            {props.index === 4 ?
                <Fade in={true} timeout={800} >
                    <Typography
                        align='center'
                        color="textSecondary"
                        variant="body1"
                    >
                        {props.content}
                    </Typography>
                </Fade> : <div> </div>
            }
            {props.index === 5 ?
            <Fade in={true} timeout={800} >
                <Typography
                    align='center'
                    color="textSecondary"
                    variant="body1"
                >
                    {props.content}
                </Typography> 
            </Fade> : <div></div>
            }
        </React.Fragment>
    )
}
