import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Transed from './WeatherTranslate';
// Fetch directly from server of weatherAPI - wrong approach !
export default function Weather(props) {
    const [weatherState, setWeather] = useState([]);
    useEffect(() => {
        //NOT fetch API directly if working with database !
        fetch('api.openweathermap.org/data/2.5/weather?id=1566083&appid=993b74dcf47ca6d2e41af6a14164546b',
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
