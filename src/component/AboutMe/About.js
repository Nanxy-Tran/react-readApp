import React from 'react';
import { Grid, Typography, Avatar, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import aboutMe from '../dataMedia/AboutMe.jpg';
import ava from '../dataMedia/avatar.jpg';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
const AboutStyle = makeStyles({
    baseFrame: {
        height: '100%',
    },
    subPanel: {
        justifyItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
    },
    cover: {
        background: `url('${aboutMe}')`,
        backgroundPosition: 'right 0% top 30%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    panelHeader: {
        paddingTop: '8rem',
        paddingBottom: '8rem',
        padding: 'auto',
        margin: 'auto',
        textDecoration: 'underline',
    },
    headerHolder: {
        paddingLeft: '1rem',
        paddingTop: '1rem',
    },
    avaHolder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: "1rem",
        width: '100%',
    },
    ava: {
        width: '5rem',
        height: '5rem',
    },
    body: {
        margin: 'auto',
    },
    contact: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto'

    }

})
export default function About() {
    const classes = AboutStyle();
    return (
        <React.Fragment>
            <Grid
                container lg={12}
                className={classes.baseFrame}
            >
                <Grid
                    container lg={12}
                    className={classes.cover}
                >
                    <Typography
                        variant="h3"
                        className={classes.panelHeader}
                        color="textPrimary"
                    >
                        A B O U T
                    </Typography>
                </Grid>
                <Grid
                    container lg={10}
                    alignContent="center"
                    className={classes.subPanel}
                >
                    <Grid
                        item lg={1} sm={12}
                        className={classes.avaHolder}
                    >
                        <Avatar
                            src={ava}
                            className={classes.ava}
                        />
                    </Grid>
                    <Grid
                        item lg={7} sm={12}
                        className={classes.headerHolder}
                    >
                        <CardContent>
                            <Typography
                                variant="h4"
                                color='textPrimary'
                            >
                                Hi, mình là Thịnh...
                        </Typography>
                            <Typography
                                variant="caption"
                                style={{textDecoration: 'underline', fontSize: '1.4rem'}}
                                color='textPrimary'
                            >
                                <i> Ultimate Loser  </i> - <q> Make peace not war plzz </q>
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Grid
                    container lg={8}
                    className={classes.body}
                >
                    <Grid 
                        container 
                        style={{padding: '1rem'}}
                    >
                        <Typography    
                            display='block'                        
                            align="center"
                            variant='h3'
                            color='textPrimary'
                        >
                            Về mình và website
                        </Typography>
                        <Typography align='justify' style={{marginTop: '1rem'}} color='textPrimary'>
                            Chuyện kể về một anh thanh niên đẹp trai tốt nghiệp đại học pô lít. Một ngày đẹp trời, anh bắt gặp một ông lão trông khả nghi đang luẩn quẩn quanh bốt trực của mình. Với giác quan nhạy bén, anh liền tiếp cận ông lão và hỏi xem ông đang giấu thứ gì. Ông lão thấy vậy, từ từ ngẩng đầu để lộ khuôn mặt hiền từ, không nói không rằng, ông rút từ trong túi ra cuốn sách mục nát dúi vào tay anh. Bất giác, anh liếc nhìn trang bìa, một tựa đề bằng mực đên đã phai mờ: 
                        </Typography>
                        <Typography variant='body2' style={{marginTop: '1rem'}} color='textPrimary'>
                            <strong>
                                <i> 
                                    300 bài code thiếu nhi (Lmt Edition)
                                </i>
                            </strong>                            
                        </Typography>
                        <Typography align='justify' style={{marginTop: '1rem'}} color='textPrimary'>
                            Ngẩng đầu lên, ông lão kia đã biến mất khỏi tầm mắt của anh. Tặc lưỡi cho qua, anh nghĩ đó chỉ là một ngày kỳ dị chứ không phải một ngày làm thay đổi cuộc đời anh. Chuỗi ngày tiếp theo với anh thanh niên vẫn là những ca trực triền miên, nhưng giờ đây đã có thêm pho sách kỳ lạ làm bạn đồng hành. 
                            Những lúc rảnh rỗi, anh đều lấy nó ra đọc, vừa thưởng thức, vừa tìm hiểu về ngành nghề người ta đang đồn là hot lắm, là thiếu lắm. Sau bao ngày tháng dùi mài kinh sử, anh đã lĩnh hội được <strong> vài ba bài </strong> trong 300 bài code thiếu nhi ảo diệu kia và quyết tâm lên đường làm coder Front-end.
                        </Typography>
                        <Typography align='justify' style={{marginTop: '1rem'}} color='textPrimary'> 
                            Cuộc hành trình phía trước còn dài, anh thanh niên phải tìm lại và báo đáp ông lão bí ẩn kia, hoàn thành nốt mấy trăm bài code còn dang dở và tìm lại chính mình trong cuộc sống. Nhà tuyển dụng hãy giúp anh thanh niên đi nào.
                        </Typography>                             
                        <Typography color='textPrimary' align='justify'> 
                            Thân ái :3 
                        </Typography>
                    </Grid>
                    <Grid
                        container lg={10}
                        className={classes.contact}
                    >
                        <Typography color='textPrimary'>
                            Liên hệ:
                        </Typography>
                        <Grid style={{ display: 'flex' }}>
                            <MailIcon />
                            <Typography
                                style={{ marginLeft: '0.5rem' }}
                                color='textPrimary'
                            >
                                - eeit104@gmail.com
                        </Typography>
                        </Grid>
                        <Grid style={{ display: 'flex' }}>
                            <FacebookIcon />
                            <a href="https://www.facebook.com/ahxtpn?ref=bookmarks"
                               target="_blank" 
                               rel='noopener noreferrer'                               
                            >
                                <Typography
                                    style={{ marginLeft: '0.5rem' }}
                                    color='textPrimary'
                                >
                                    - Trần Thịnh
                                </Typography>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
