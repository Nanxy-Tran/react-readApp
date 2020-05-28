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
                                <i> In love with ReactJS </i>
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
                            Website là project đầu tiên của bản thân nên không tránh phần sai sót. Về cách viết code và pattern còn chưa chuẩn xác, UX/UI chưa tối ưu và còn nhiều nhược điểm khác. Bản thân mình đang theo học lại Đại học ngành công nghê thông tin (online) nên rất mong muốn tìm được việc làm fulltime để tinh thần thoải mái, có thể tập trung hơn vào việc học, đồng thời có thêm kinh nghiệm. 
                        </Typography>
                        <Typography variant='h5' style={{marginTop: '1rem'}} color='textPrimary'>                        
                             Kỹ năng                         
                        </Typography>
                        <Typography variant="body2" style={{marginTop: '1rem'}} color='textPrimary'> 
                            <ol>
                                <li>
                                    HTML, CSS, Javascript(ES6). Có kiến thức cơ bản về HTML, CSS cũng như Web API, hiểu tương đối về những đặc điểm của Javascript như Asynchronous (Async, await), Coercion, Closure,..
                                </li>
                                <li>
                                    ReactJS, Redux: có kiến thức để làm việc với ReactJS và các plugin khác của React. Hiểu về các khái niệm của Reactjs như State, Props, Lifecycle, Hook,...
                                </li>
                                <li>
                                    Material-UI, Bootstrap 4, Styled Component: có khả năng làm việc tốt với Material-UI. 
                                </li>
                                <li> 
                                    Nodejs và Expressjs, RESTful API, và MongoDB cơ bản để thực hiện MERN stack. 
                                </li>
                            </ol>
                        </Typography>
                        <Typography variant='h5' style={{marginTop: '1rem'}} color='textPrimary'>                        
                            Tính cách                         
                        </Typography>
                        <Typography variant="body2" style={{marginTop: '1rem'}} color='textPrimary'> 
                            Bản thân là người vui vẻ, hòa đồng nhưng ít nói. Với công viêc, luôn cố gắng để tạo ra sự tập trung cao độ, hoàn thành công việc được giao. 
                        </Typography>
                        <Typography variant='h5' style={{marginTop: '1rem'}} color='textPrimary'> 
                           Sở thích 
                        </Typography>                             
                        <Typography color='textPrimary' align='justify' style={{marginTop: '1rem'}}> 
                            <ul>
                                <li>
                                    Chơi thủy sinh và nuôi tép
                                </li>
                                <li>
                                    Đọc sách
                                </li>
                                <li>
                                    Chạy bộ
                                </li>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid
                        container lg={10}
                        className={classes.contact}
                    >
                        <Typography color='textPrimary' style={{marginTop: '1rem'}}>
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
                            <a href="https://www.facebook.com/ahxtpn"
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
