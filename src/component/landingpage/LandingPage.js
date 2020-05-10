import React, {useState} from 'react';
import {  
    AppBar, 
    Hidden, 
    Toolbar, 
    Typography, 
    IconButton, 
    Grid } from '@material-ui/core';
import { 
    Link as RouterLink, 
    Route, 
    Switch } from 'react-router-dom';
import ResponsiveDrawer from './ResponsiveDrawer';
import CarouselPanel from './CarouselPanel';
import DarkMode from './DarkMode';
import BookIcon from '@material-ui/icons/Book';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ShopIcon from '@material-ui/icons/Shop';
import ReadApp from '../ReadAPP/Frame/ReadApp';
import {makeStyles} from '@material-ui/core/styles';
import logo from '../dataMedia/logo.svg';
import PostPage from '../PostCard/PostPage';
import AboutMe from '../AboutMe/About';

const homepage = makeStyles((theme) => ({
    root: {
        background: theme.background,
        height: '100%',       
    },   
    logo: {
        width: 'auto',
        height: '3rem',
    },
    logoLinkLight : {
        '&:visited': {
            textDecoration: 'none',
        },
        '&:hover': {
            color: '#26a69a',
            textDecoration: 'underline', 
        },
        textDecoration: 'none', 
        color: '#616161'     
    },
    logoLinkDark : {
        '&:visited': {
            textDecoration: 'none',
        },
        '&:hover': {
            color: '#fff59d',
            textDecoration: 'underline', 
        },
        textDecoration: 'none', 
        color: '#fafafa'     
    },     
    navbar: {
        borderRadius: '0px 0px 0px 2rem',    
    },
    toolbar: {
        justifyContent:'center',
    },
    buttonIcon: {
        borderRadius: '0',
    },
    linkHolder :{
        justifyContent:'center',
        display: 'flex',
    },
}))

export default function LandingPage(props) {
    const [darkTheme, setDark] = useState(false);
    const classes = homepage();
    const handleTheme = (value) => {
        props.changeMode(value);
        setDark(prev  => !prev);
    }
    return (
        <React.Fragment>
            <div className={classes.root}> 
                <AppBar 
                    position="sticky"
                    color='inherit'
                    className={classes.navbar}
                >
                    <Toolbar className={classes.toolbar}>
                        <Hidden smUp>
                            <Grid item sm={2}>
                                <ResponsiveDrawer />
                            </Grid>
                        </Hidden>                        
                        <Grid item lg={4} sm={8} style={{display: 'flex'}} justify='center'>
                            <img src={logo} 
                                 alt="logo"
                                 className={classes.logo}
                            />
                            <Typography 
                                style={{margin: 'auto',
                                marginLeft:' 10px', marginRight: '0'}}
                                component={RouterLink}
                                to="/"   
                                className={darkTheme ? classes.logoLinkDark : classes.logoLinkLight}                             
                            > 
                               Blog của Thịnh 
                            </Typography>
                        </Grid>
                        <Hidden mdDown>
                            <Grid item lg={2} className={classes.linkHolder}>
                                <IconButton component={RouterLink} 
                                            to="/Posts" 
                                            edge='center'
                                            className={classes.buttonIcon}                                    >
                                    <BookIcon /> 
                                    <Typography> Bài viết </Typography>  
                                </IconButton>
                            </Grid>
                            <Grid item lg={2} className={classes.linkHolder}>
                                <IconButton component={RouterLink} 
                                            to="/TodayRead"
                                            edge='center'
                                            className={classes.buttonIcon}
                                >
                                    <ShopIcon />
                                    <Typography> ReadApp® </Typography>
                                </IconButton>
                            </Grid>
                            <Grid item lg={2} className={classes.linkHolder}>
                                <IconButton
                                    component={RouterLink}
                                    to="/Profile"
                                    edge="center"
                                    className={classes.buttonIcon}
                                >
                                    <AccountBoxIcon />
                                    <Typography> Tác giả </Typography>
                                </IconButton>
                            </Grid>
                        </Hidden>
                        <Grid item lg={2} sm={2}>
                            <DarkMode changeTheme={handleTheme} />
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container lg={12} sm={12} justify="center">
                    <Switch>
                        <Route exact path="/">
                            <CarouselPanel />
                        </Route>
                        <Route path="/Profile">
                            <AboutMe />
                        </Route>
                        <Route path="/Posts">
                            <PostPage />
                        </Route>
                        <Route path="/TodayRead">
                            <ReadApp />
                        </Route>
                    </Switch>
                </Grid>
                <Grid container lg={12} style={{justifyContent: 'center'}}>
                    <Typography align='center' variant="caption"> 
                        Excuse me, no footer !
                    </Typography>
                </Grid>
            </div>
        </React.Fragment>
    )
}
