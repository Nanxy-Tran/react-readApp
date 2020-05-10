import React, { useState } from 'react';
import { Typography, Fade, Paper, Slider } from '@material-ui/core';
import stress from '../../dataSpecs/stress.json';
import StressSpec from './StressSpec';
import { useDispatch } from 'react-redux';
import { updateStress } from '../../actions/actions';
import { makeStyles } from '@material-ui/core/styles';
import stressCover from '../../dataMedia/stressbar.jpg';

const generalBar = makeStyles({
    root: {
        height: '30vh',
        width: '80vw',
        background: `url(${stressCover})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '1rem',
        border: 'solid',
        borderColor: '#bbdefb',
        justifyContent: 'center',
    },
    slider: {
        width: '55vw',
        height: '3vh',
        margin: 'auto',
    }
})
const marks = [
    {
        value: 0,
        label: '0đ',
    },
    {
        value: 1,
        label: '1đ',
    },
    {
        value: 2,
        label: '2đ',
    },
    {
        value: 3,
        label: '3đ',
    },
    {
        value: 4,
        label: '4đ',
    },
    {
        value: 5,
        label: '5đ',
    },

];
export default function HealthBar(props) {
    const classes = generalBar();    
    const dispatch = useDispatch();
    const [state, setState] = useState(0);
    const dataSpecs = stress;

    const handleChange = (e, newValue) => {
        setState(newValue);
        dispatch(updateStress(newValue));
    }

    return (
        <React.Fragment>
            <Paper
                elevation={5}
                className={classes.root}
            >
                <Fade in={true} timeout={500}>
                    <Typography
                        color='secondary'
                        variant='body1'
                        align='center'
                        style={{ paddingTop: '1rem' }}
                    >  Bạn có cảm thấy căng thẳng ? 
                     </Typography>
                </Fade>
                <div
                    style={{textAlign: 'center'}}
                >                    
                    <Slider
                            defaultValue={0}
                            step={1}
                            min={0}
                            max={5}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            marks={marks}
                            onChangeCommitted={handleChange}
                            className={classes.slider}
                        />
                    <Fade in={true} timeout={500}> 
                        <StressSpec content={dataSpecs[state]} index={state} />
                    </Fade>                     
                </div>
            </Paper>
        </React.Fragment>
    )
}
