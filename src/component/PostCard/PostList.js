import React, { useState } from 'react';
import { Grid, Typography, CardMedia, CardHeader, CardContent, Card, Button } from '@material-ui/core';
import dataWeb from '../dataSpecs/aboutWeb.json';
import { Link as RouterLink, Switch, Route, useRouteMatch } from "react-router-dom";
import Post from './Post';
import { makeStyles } from '@material-ui/core/styles';
import cardCover from '../dataMedia/abstractColor.jpg';
import cardCover2 from '../dataMedia/abstractColor2.jpg';
import cardCover3 from '../dataMedia/abstractColor3.jpg';
const PostListTheme = makeStyles({
    listFrame: {
        paddingTop: '3vh',
    },
    cardFrame: {
        width: '100%',
        height: '100%',
        borderRadius: '1rem',
        display: 'flex',
    },
    cardImage: {
        width: '12rem',
        height: '100%',
    }, 
    cardContent: {
        marginLeft: '3vw',
        padding: 0,
        marginTop: '3vh',
    }, 
    cardButton: {
        marginRight: '1vw',
        width: '12vw',
    }
})
export default function PostList() {
    const data = dataWeb;
    const imageData = [cardCover, cardCover2, cardCover3];
    const classes = PostListTheme();
    let match = useRouteMatch();
    return (
        <React.Fragment>
            <Grid container>
                <Switch>
                    <Route exact path={match.url}>
                        <Typography variant='h4' className={classes.listFrame}>
                            Tổng hợp bài viết
                        </Typography>
                        {data.posts.map(item => (
                            <Grid container className={classes.listFrame}>
                                <Card className={classes.cardFrame}>
                                    <CardMedia image={imageData[Math.floor(Math.random()*3)]} className={classes.cardImage}/>
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant='h6' display='block'> 
                                            {item.title}
                                        </Typography>
                                        <Typography variant='caption' display='block' style={{marginBottom: '2vh'}}>
                                            {item.summary}
                                        </Typography>
                                        <Button component={RouterLink}
                                            to={`${match.url}/${item.id}`}
                                            variant="outlined"
                                            color='primary'
                                            className={classes.cardButton}
                                        >
                                            Đọc thêm
                                    </Button>
                                        <Button component={RouterLink}
                                            to={`${match.url}/${item.id}`}
                                            variant='contained'
                                            color='primary'
                                            className={classes.cardButton}
                                        >
                                        <Typography color='textSecondary' > 
                                            Đọc sau
                                        </Typography>
                                    </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Route>
                    {data.posts.map(item => (
                        <Route path={`${match.url}/${item.id}`}>
                            <Post postContent={item} />
                        </Route>
                    ))}
                </Switch>
            </Grid>
        </React.Fragment>
    )
}
