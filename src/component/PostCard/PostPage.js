import React from 'react';
import { Fade, Grid, Hidden, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PostSideBar from './PostSideBar';
import panelBackground from '../dataMedia/postPanel.jpg';
import PostList from './PostList';

const PostPageCSS = makeStyles({
    panel: {
        background: `url('${panelBackground}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    header: {
        marginTop: "4rem",
        marginBottom: "1rem",
        margin: 'auto',
    },
    footer: {
        marginBottom: "4rem",
        marginLeft: '7rem'
    },
    postSideBar: {        
        position: 'sticky',
        top: '5vh',
    }
})

export default function PostsPage() {

    const classes = PostPageCSS();
    return (
        <React.Fragment>
            <Fade in={true} timeout={1000}>
                <Grid
                    container lg={12}
                    className={classes.panel}
                    justify
                >
                    <Fade in={true} timeout={1000}>
                        <Grid container
                            lg={10}
                            className={classes.header}
                        >
                            <Typography variant="h2"
                                color="secondary"
                            >
                                Đọc gì hôm nay !?
                    </Typography>
                        </Grid>
                    </Fade>
                    <Grid container
                        lg={5}
                        sm={10}
                        className={classes.footer}
                    >
                        <Typography variant="body1"
                            color="secondary"
                        >
                            Điểm báo, thông tin thời sự, dịch bệch, tổ lái, quan điểm , đánh giá, chia sẻ cảm nhận, tình cảm, công việc, thần lực, và rất nhiều thứ khác để bắt tay ngay vào học !
                    </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            style={{ marginTop: '1rem', marginRight: '1rem' }}>
                            Đăng ký
                    </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: '1rem' }}

                        >
                            <Typography
                                color='textSecondary'
                            >
                                Đăng nhập
                        </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Fade>
            <Fade
                in={true}
                timeout={1000}
            >
                <Grid container lg={12} justify="center">
                    <Grid item lg={7} sm={12}>
                        <PostList />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item lg={3} className={classes.postSideBar}>
                            <PostSideBar />
                        </Grid>
                    </Hidden>
                </Grid>
            </Fade>
        </React.Fragment>
    )
}
