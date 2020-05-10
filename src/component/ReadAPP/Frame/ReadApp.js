import React, { useState } from 'react';
import { Grid, Fade } from "@material-ui/core";
import { useSelector } from 'react-redux';
import Greeting from './Greeting';
import StepperCard from './Stepper';
import Score from '../Score/Score';
import Cover from './Cover';
import { makeStyles } from '@material-ui/core/styles';

const appStyle = makeStyles({
    root: {
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2rem',
        height: '90vh',
    }, 
    score: {
        flexDirection: 'column',
    },   
})

export default function ReadApp() {
    const classes = appStyle();
    const [state, setState] = useState(0);
    const [coverShow, setCoverShow] = useState(true);
    const [greetingShow, setGreetingShow] = useState(false);
    const [stepperShow, setStepperShow] = useState(false);
    const [scoreShow, setScoreShow] = useState(false);

    let weather = useSelector(state => state.weather);
    let health = useSelector(state => state.health);
    let stress = useSelector(state => state.stress);
    let type = useSelector(state => state.type);
    let motivate = useSelector(state => state.motivate);
    let score = health + stress + type + motivate + weather;

    const handleCover = () => {
        setCoverShow(false);
        setGreetingShow(true);
    };
    const handleGreeting = () => {
        setStepperShow(true);
        setGreetingShow(false);           
    };
    const handleScore = () => {
        setState(score);
        setStepperShow(false); 
        setScoreShow(true);
    };
    return (
        <Grid
            container
            className={classes.root}
            lg={10}
            md={10}
        >
            {coverShow ?
                <Cover handleChange={handleCover} />
                : <div></div>
            }
            {greetingShow ?
                <Grid
                    container
                    lg={12}
                >
                    <Greeting changeGreeting={handleGreeting}/>                    
                </Grid>
                : <div></div>
            }            
            {stepperShow ?
                <Fade
                    in={true}
                    timeout={2000}
                >
                    <Grid 
                        container lg={12}    
                        style={{height: '45vh'}}                   
                    > 
                        <StepperCard submit={handleScore} />
                    </Grid>
                </Fade>
                : <div></div>
            }
            {scoreShow ?
                <Fade in={true} timeout={1000}>
                    <Grid 
                        container
                        lg={12}
                        sm={12}
                        className={classes.score}
                    >
                        <Score score={state} />
                    </Grid>
                </Fade>
                : <div> </div>
            }
        </Grid>
    )
}