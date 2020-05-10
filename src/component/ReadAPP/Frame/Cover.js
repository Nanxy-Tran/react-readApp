import React from 'react';
import { Typography, Paper, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import coverImage from  '../../dataMedia/app_cover.jpg';

const coverApp = makeStyles({
    root: {
        borderRadius: " 1rem 1rem 1rem 1rem",
        width: '75%',
        height: '80vh', 
        background: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',              
    },
    greeting: {
        flexDirection: 'column',    
        margin: 'auto', 
        marginTop: '10rem',          
    },
    button:{
        width: '20vw',
        margin: 'auto',
        marginTop: '1rem',
        '&:hover' : {
            backgroundColor: '#4db6ac',
            color: '#e0f2f1',
        }, 
        borderRadius: '10px',
    },
})

export default function Cover(props) {
    const classes = coverApp();
    const handleClick = () => {
        props.handleChange();
    }

    return (
        <React.Fragment>
            <Grid container lg={12} alignContent='center' justify='center'>
                <Paper
                    className={classes.root}
                >
                    <Grid container
                          className={classes.greeting}
                    >
                        <Typography 
                            display='block'                            
                            align='center'
                            variant='h5'                           
                        >
                            <i>Đọc gì hôm nay .... ?</i>                            
                        </Typography>
                        <Button
                            onClick={handleClick}
                            variant='outlined'
                            color='primary' 
                            className={classes.button}
                            endIcon={<FontAwesomeIcon icon={faCircleNotch} spin />}
                        >                      
                            Bắt đầu                            
                        </Button>                        
                    </Grid>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}
