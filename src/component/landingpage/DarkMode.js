import React, { useState } from 'react'
import { Switch, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const switchTheme = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
}))
const StyledSwitch = withStyles({
    switchBase: {
        color: '#e3f2fd',
        '&$checked': {
          color: '#fdd835',
        },
        '&$checked + $track': {
          backgroundColor: '#fdd835',
        },
      },
      checked: {},
      track: {},
    })(Switch);
        
export default function DarkMode(props) {
    const [darkMode, setDarkMode] = useState(false);
    const classes = switchTheme();
    const handleChange = (event) => {
        setDarkMode(event.target.checked);
        props.changeTheme(event.target.checked);
    };
    return (
        <React.Fragment>
            <Grid className={classes.root}>
                <StyledSwitch                    
                    checked={darkMode}
                    onChange={handleChange}
                />
                {darkMode ?
                    <WbSunnyIcon color="action" /> :
                    <Brightness3Icon />}
                {/* Chuyen sang icon cua Material Design */}
            </Grid>
        </React.Fragment>
    )
}
