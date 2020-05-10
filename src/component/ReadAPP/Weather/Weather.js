import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Transed from './WeatherTranslate';
// kiem tra them mot lan nua ve weather specs, va them Temperature vao ! 
export default function Weather(props) {
    const [weatherState, setWeather] = useState([]);
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?id=1566083&appid=993b74dcf47ca6d2e41af6a14164546b',
        {referrerPolicy: 'no-referrer-when-downgrade'})
            .then(res => res.json())
            .then(result => {
                setWeather(result.weather);
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <React.Fragment>
            <div>
                <Typography>
                    {weatherState.map(item => (
                        <Transed 
                            weather={item.main}
                        />
                    ))}
                </Typography>
            </div>
        </React.Fragment>
    )
}
