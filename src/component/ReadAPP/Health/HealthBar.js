import React, { useState, useEffect } from 'react';
import { Typography, Fade, Paper, Slider } from '@material-ui/core';
import HealSpecs from './HealSpecs';
import health from '../../dataSpecs/health.json';
import {useDispatch } from 'react-redux';
import {updateHealth} from '../../actions/actions';
import {makeStyles} from '@material-ui/core/styles';
import healthCover from '../../dataMedia/healthBar.jpg';

const generalBar =  makeStyles({ 
    root: {        
        height: '30vh',
        width: '80vw',
        background: `url(${healthCover})`,
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
    const dataSpecs = health;    

    const handleChange = (e, newValue) => {
        setState(newValue);
        dispatch(updateHealth(newValue));
    }
    useEffect(()=> {
        dispatch(updateHealth(0));
    },[]);

    return (
        <React.Fragment>
            <Paper
                className={classes.root}
                elevation={5}
            >
                <Fade in={true} timeout={500}>
                    <Typography
                        color='textPrimary'
                        variant='body1'
                        align='center'      
                        style={{paddingTop: '1rem'}}
                    > Bạn cảm thấy khỏe không ?  
                    </Typography>
                </Fade>
                <div
                    style={{textAlign: 'center'}}
                >
                <Fade in={true} timeout={500}>
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
                </Fade>    
                    <HealSpecs content={dataSpecs[state]} index={state}/>
                </div>
            </Paper>
        </React.Fragment>
    )
}
