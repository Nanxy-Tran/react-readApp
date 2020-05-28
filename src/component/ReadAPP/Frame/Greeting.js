import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper, Button, Fade } from '@material-ui/core';
import Transed from '../Weather/WeatherTranslate';
import GreetingFlow from './GreetingFlow';
import { makeStyles } from '@material-ui/core/styles';
import cover from '../../dataMedia/app_weather_clear.jpg';

export default function Greetings(props) {
    const [weatherState, setWeather] = useState([]);
    const [showButton, setShowButton] = useState(false);
    const handleShowButton = () => {
        setTimeout(() => setShowButton(prev => !prev), 1000);
    };
    const handleStart = () => {
        props.changeGreeting();
    }
    const mainApp = makeStyles({
        root: {
            background: `url(${cover})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '35vh',
            width: '80vw',
            borderRadius: '1rem',
        },
        panelLayout: {
            justifyContent: 'space-between',
        },
        rootGreeting: {
            backgroundColor: '#e0f2f1',
            borderRadius: '0.5rem',
            height: '4.5rem',
            width: '20rem',
            marginTop: '1vh',
            marginLeft: '5vw',
        },
        rootWeatherinfo: {
            backgroundColor: '#b3e5fc',
            borderRadius: '0.5rem',
            height: '3rem',
            width: '8rem',
            marginTop: "1vh",
            marginLeft: '5vw',
        }, 
        startButton: {
            borderRadius: '0.5rem',
            backgroundColor: '#b3e5fc',
            '&:hover' :{
                backgroundColor: 'transparent',
                color: '#e0f2f1',
            },
            height: '3rem',
            marginLeft: '0.8vw',
            width: '11.5rem',
            marginTop: "1vh",
        }
    })

    const classes = mainApp();
    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?id=1566083&appid=993b74dcf47ca6d2e41af6a14164546b')
            .then(res => res.json())
            .then(result => setWeather(result.weather))
            .catch(err => console.log(err))
    }, []);
    return (
        <Paper
            elevation={5}
            className={classes.root}
        >
            <Grid container lg={12}
                className={classes.panelLayout}
            >
                <Grid item>
                    <Typography
                        variant="h5"
                        align="center"
                        color="secondary"
                        style={{ marginTop: "2vh", marginLeft: '5vw' }}
                    >
                        Giới thiệu !
                        </Typography>
                    <Paper
                        className={classes.rootGreeting}
                    >
                        <GreetingFlow showButton={handleShowButton}/>
                    </Paper>
                    <Grid container>
                        <Paper
                            className={classes.rootWeatherinfo}
                        >
                            <Typography>
                                {weatherState.map(item => (
                                    <Transed weather={item.main} />
                                ))}
                            </Typography>
                        </Paper>
                        <Fade in={showButton} timeout={1000}>
                            <Button
                                variant='outlined'
                                color='primary'
                                className={classes.startButton}
                                onClick={handleStart}
                            >
                                Let's gooo !
                            </Button>
                        </Fade>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}