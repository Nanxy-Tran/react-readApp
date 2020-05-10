import React, { useState } from 'react';
import {
    IconButton,
    Drawer,
    List,
    ListItem,
    Divider,
    ListItemIcon,    
    ListItemAvatar,
    ListItemText,
    Typography
} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { makeStyles } from '@material-ui/core/styles';
import AppsIcon from '@material-ui/icons/Apps';
import {Link as RouterLink} from 'react-router-dom';

const theme = makeStyles({
    drawer: {
        width: "250px",
        height: "100%",
        backgroundColor: "linear-gradient(90deg, rgba(164,255,242,0) 0%, rgba(255,255,255,1) 100%)linear-gradient(90deg, rgba(164,255,242,0) 0%, rgba(189,255,246,1) 44%, rgba(189,255,246,1) 73%, rgba(255,255,255,1) 100%)",        
        borderRadius: "0 1rem 1rem 0"
    }
})

export default function ResponsiveDrawer() {
    const classes = theme();
    const [isOpen, setOpen] = useState(false);
    const handleOpen = (e) => {
        setOpen(true);
    }
    const links = [
        {
            label: 'Home',
            link: "/",
        },
        {
            label: 'Posts',
            link: "/Posts",
        },
        {
            label: 'ReadApp',
            link: "/TodayRead",
        },
        {
            label: 'About',
            link: "/Profile",
        }
    ];

    return (
        <React.Fragment>
            <IconButton>
                <MenuIcon               
                    fontSize="default"                    
                    onClick={handleOpen}
                    href="#"
                    style={{color: "#e8eaea"}}
                />
            </IconButton>
            <Drawer
                anchor={"left"}
                open={isOpen}
                onClose={() => { setOpen(false) }}                
            >
                <div className={classes.drawer}>
                    <List>
                        <ListItem alignItems="center">
                                <ListItemAvatar>
                                    <AppsIcon fontSize="default"/>
                                </ListItemAvatar>
                            <ListItemText
                                primary="Get started"
                                secondary={                                    
                                        <Typography
                                            component="span"
                                            variant="body3"                                            
                                            color="textPrimary"
                                        > {"Learn through ours awesome posts about technical skill and life !"}                                        
                                        </Typography>                                        
                                } 
                            />                                              
                        </ListItem>
                    </List>                                       
                <Divider />
                            <List>
                                {links.map((item) =>
                                    <ListItem button component={RouterLink} to={item.link} >
                                        <ListItemIcon>
                                            <PlayArrowIcon fontSize="default" />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography variant="h6">{item.label}</Typography>
                                        </ListItemText>
                                    </ListItem>
                                )}
                            </List> 
                </div>                  
            </Drawer>
        </React.Fragment>
    )
}
