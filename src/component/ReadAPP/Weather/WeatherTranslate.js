import React, { useState, useEffect } from 'react'
import { Typography, Fade } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faSun, faCloudSun } from '@fortawesome/free-solid-svg-icons';

export default function WeatherTranslate(props) {
    const [transed, setTransed] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        if (props.weather === 'Clouds') {
            setTransed("trời nhiều mây");
            setIcon(<FontAwesomeIcon icon={faCloudSun} />);
        } else if (props.weather === 'Sunny') {
            setTransed("troi nang");
            setIcon(<FontAwesomeIcon icon={faSun} />)
        } else if (props.weather === "Clear") {
            setTransed("troi trong xanh");
            setIcon(<FontAwesomeIcon icon={faSun} />)
        } else if (props.weather === "Rain") {
            setTransed("troi mua")
            setIcon(<FontAwesomeIcon icon={faCloudRain} />)
        } else setTransed("thoi tiet khong xac dinh")
    }, [props]);

    return (
        <React.Fragment>
            <Fade in={true} timeout={3000}>
                <Typography align="center"> {transed} </Typography>
            </Fade>
            <Fade in={true} timeout={3000}>
                <Typography align="center">
                    {icon != null && icon}                      
                </Typography>                
            </Fade>            
        </React.Fragment>
    )
}
