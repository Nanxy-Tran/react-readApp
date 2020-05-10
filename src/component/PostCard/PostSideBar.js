import React, { useState, useEffect } from "react";
import {
    Grid,
    List,
    Divider,
    Typography,
    Fade,
    Paper,
    ListItem,
    ListSubheader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireAlt } from "@fortawesome/free-solid-svg-icons";
import postData from '../dataSpecs/postData.json';
import CardSideBar from './CardSideBar';
import rank1 from '../dataMedia/post_rank/1.png';
import rank2 from '../dataMedia/post_rank/2.png';
import rank3 from '../dataMedia/post_rank/3.png';

const sideBarTheme = makeStyles({
    root: {
        paddingTop: '3vh',
        position: 'sticky', 
        top: '8vh',  
    },
    frame: {               
        marginLeft: '1rem',        
    }
})

export default function PostSideBar() {
    const classes = sideBarTheme();
    let data = postData.data;
    let icons = [rank1, rank2, rank3];
    const [visible, setVisible] = useState(false);
    const handleScroll = () => {
        setVisible(() => {
            if (window.scrollY > 150) {
                return true;
            } else return false;
        });
        console.log(window.scrollY);
    };
    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => document.addEventListener("scroll", handleScroll);
    });
    return (
        <React.Fragment>
            <Grid container lg={12} className={classes.root}>
                <Fade in={visible} timeout={1000} direction="left">
                    <Paper elevation={2} className={classes.frame}>
                        <List>
                            <ListSubheader color="inherit" disableGutters
                                style={{display: 'flex', justifyContent:'center'}}
                            >
                                <FontAwesomeIcon icon={faFireAlt} spin display size="3x"/>
                                <Typography style={{paddingLeft: '1rem'}}
                                            variant="h6"
                                >Menu nóng hổi
                                </Typography>
                            </ListSubheader>
                            <Divider />
                            {data.map((item,index) => (
                                <div>
                                <ListItem>
                                    <CardSideBar
                                        icon={icons[index]} 
                                        title={item.title}
                                        content={item.summary}   
                                    />                                                               
                                </ListItem>
                                <Divider variant="fullWidth"/>   
                                </div>
                            ))}
                        </List>
                    </Paper>
                </Fade>
            </Grid>
        </React.Fragment>
    );
}
