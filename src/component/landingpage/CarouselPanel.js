import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Button, Grid } from '@material-ui/core';
import { Link as Routerlink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import post from '../dataMedia/news.jpg';
import app from '../dataMedia/learn.jpg';
import selfie from '../dataMedia/about.jpg';
import welcome from '../dataMedia/welcome.jpg';

const carousel = makeStyles({
    root: {
        height: "100vh",
    },
    rootCarousel: {
        height: "70vh",
        width: "100%"
    },
    panelButton: {
        marginTop: '1rem',
        borderRadius: "0 1rem 0 1rem ",
    },
    infoPanel: {
        margin: "0",
        padding: "1rem",
        paddingRight: '1.5rem'
    },
    panel: {
        borderRadius: "0 0 0 2rem",
        border: '0.4rem',
        
    }
})

export default function CarouselPanel() {
    let anh1 = post;
    let anh2 = app;
    let anh3 = selfie;

    const classes = carousel();
    const items = [
        {
            id: 1,
            head: "Blog của Thịnh !",
            content: "Learning to code...",
            img: welcome,
            href: "/",
        },
        {
            id: 1,
            head: "Điểm báo và hơn thế nữa !",
            content: " Thật khó để bắt tay vào công việc mỗi sáng nếu chưa biết rằng chuyện gì đang diễn ra. Nhưng không phải loại thông tin nào tiếp nhận cũng đem lại lợi ích mong muốn, đầy rẫy những tin rác, tin giả, câu like, xôi thịt, khiến đọc giả mất thời gian, sức lực, và khả năng tập trung. Vậy nên, chúng tôi cố gắng tạo ra những bài điểm tin chất lượng nhất, đi kèm là đánh giá phân tích sắc xảo, đa chiều ! ",
            img: anh1,
            href: "/Posts",
        },
        {
            id: 2,
            head: "Đọc cùng ReadApp ",
            content: "Doc gi hom nay ? em thich van tho hay triet hoc ?",
            img: anh2,
            href: "/App"
        },
        {
            id: 3,
            head: "Tác giả",
            content: "Project đầu tay, chứa đựng không chỉ những hiệu ứng chưa đến nơi đến chốn, mà còn là những ước mơ giản dị. Trong tất cả những hoạt động lặp đi lặp lại, chỉ có học là không bao giờ chán. Hãy đưa học về với ý nghĩa thuần túy nhất của nó !",
            img: anh3,
            href: "/About"
        }
    ];

    return (
        <Grid container lg={10} justify="center" className={classes.root}>
            <Carousel
                interval={50222200}
                timeout={1000}
                className={classes.rootCarousel}
            >
                {items.map(item => (
                    <div key={item.id}>
                        <Paper
                            className={classes.panel}
                            elevation={10}                            
                        >
                            <Grid container>
                                <Grid item lg={8} style={{ overflow: "hidden" }}>
                                    <img className={classes.panel}
                                        src={item.img}
                                        alt="panel"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                </Grid>
                                <Grid item lg={4} className={classes.infoPanel}>
                                    <Typography
                                        variant="h3"
                                        color="secondary">
                                        {item.head}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        align="justify"
                                    >
                                        {item.content}
                                    </Typography>
                                    <Button
                                        className={classes.panelButton}
                                        variant="outlined"
                                        color="primary"
                                        component={Routerlink}
                                        to={`${item.href}`}
                                    >
                                        Get started
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                ))}
            </Carousel>
        </Grid>
    )
}
