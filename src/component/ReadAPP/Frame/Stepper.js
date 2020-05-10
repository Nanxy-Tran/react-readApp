import React, { useState } from 'react';
import HealthBar from '../Health/HealthBar';
import StressBar from '../Stress/StressBar';
import TypeBar from '../Type/TypeBar';
import MotivateBar from '../Motivate/MotivateBar';
import WeattherBar from '../Weather/WeatherBar'
import { Grid, MobileStepper, Button, Fade, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';


const stepperTheme = makeStyles({
    cards: {
        height: '30vh',
    },
    stepper:{ 
        width: '60vw',
        height: '4vh',
        backgroundColor: "#e0f2f1",
        borderRadius: " 0 0 1rem 1rem",
        margin: "auto",
    }, 
    button: {
        borderRadius: ' 0 0 1rem 1rem',

    },
});

export default function Stepper(props) {
    const classes = stepperTheme();
    const [stage, setStage] = useState(0);
    const handleNext = () => {
        setStage(prev => prev + 1);
    };
    const handleBack = () => {
        setStage(prev => prev - 1);
    };
    const handleSubmit = () => {
        props.submit();
    }
    return (
        <React.Fragment>
            <Grid                 
                container
                className={classes.cards}
            >
                {stage === 0 ?
                    <Fade in={true} timeout={2000}>
                        <WeattherBar /> 
                    </Fade>
                : <div></div>
                }
                {stage === 1 ?
                    <Fade in={true} timeout={2000}>
                        <HealthBar /> 
                    </Fade>
                : <div></div>
                }
                {stage === 2 ?
                    <Fade in={true} timeout={2000}>
                        <StressBar /> 
                    </Fade>
                : <div></div>
                }
                {stage === 3 ?
                    <Fade in={true} timeout={2000}>
                        <TypeBar /> 
                    </Fade>
                : <div></div>
                }
                {stage === 4 ?
                    <Fade in={true} timeout={2000}>
                        <MotivateBar />
                    </Fade>
                : <div></div>
                }
            </Grid>
            <Grid container>
            <MobileStepper
                className={classes.stepper}
                position="static"  
                steps={5}
                variant="progress"
                activeStep={stage}
                nextButton={
                    stage === 4 ?
                        <Button 
                            size="small" 
                            onClick={handleSubmit} 
                            variant="contained"
                            className={classes.button}
                        >
                            <Typography> 
                                Kết quả 
                            </Typography>
                            <DoneIcon />
                        </Button> :
                        <Button 
                            size="small" 
                            onClick={handleNext}
                            variant="outlined" 
                            color="primary"
                            className={classes.button}
                        >
                            <Typography
                                variant="body2"
                            > 
                                Tiếp theo
                            </Typography>
                            <KeyboardArrowRight />
                        </Button>
                }
                backButton={
                    <Button 
                        size="small" 
                        onClick={handleBack} 
                        variant="outlined"
                        disabled={stage === 0}
                        color="primary"
                        className={classes.button}
                    >
                        <KeyboardArrowLeft />
                            Quay lại
                        </Button>
                }
            />
            </Grid>
        </React.Fragment>
    )
}
