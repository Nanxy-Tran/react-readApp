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
        margin: 'auto',
        marginLeft: '1rem'

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
                                Hello, mình là Thịnh...
                        </Typography>
                            <Typography
                                variant="caption"
                                style={{textDecoration: 'underline', fontSize: '1.4rem'}}
                                color='textPrimary'
                            >
                                <i> In love with ReactJS & React Native </i>
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
                            Về bản thân và website
                        </Typography>
                        <Typography align='justify' style={{marginTop: '1rem'}} color='textPrimary'>
                            Website là project đầu tiên của bản thân nên không tránh phần sai sót. Về cách viết code và pattern còn chưa chuẩn xác, UX/UI chưa tối ưu và còn nhiều nhược điểm khác. Bản thân đang theo học lại Đại học ngành công nghê thông tin (online) nên rất mong muốn tìm được việc làm fulltime để tinh thần thoải mái, có thể tập trung hơn vào việc học, đồng thời có thêm kinh nghiệm. 
                        </Typography>
                        <Typography variant='h5' style={{marginTop: '1rem'}} color='textPrimary'>                        
                             Skills                        
                        </Typography>
                        <Typography variant="body1" style={{marginTop: '1rem'}} color='textPrimary'> 
                            <ol>
                                <li>
                                    HTML, CSS, Javascript(ES6). Có kiến thức cơ bản về HTML, CSS cũng như Web API, hiểu tương đối về những đặc điểm của Javascript như Asynchronous, Coercion, Closure, Scope,....
                                </li>
                                <li>
                                    ReactJS, React Native, Redux: có kiến thức để làm việc với API và một số thư viện khác để xây dựng ứng dụng mobile.  Hiểu về các khái niệm của Reactjs như State, Props, Lifecycle, Hook,... có kiến thức cơ bản về tối ưu hoá ứng dụng.
                                </li>
                                <li>
                                    Material-UI, Bootstrap 4, Styled Component: có khả năng làm việc tốt với Material-UI,...Có kinh nghiệm thực tế xây dựng ứng dụng mobile với React Native.
                                </li>
                                <li>
                                    Kinh nghiệm làm việc thực tế về clean code và mô hình agile Kanban trong dự án.
                                </li>
                                <li> 
                                    Kiến thức cơ bản về Nodejs (Expressjs) , RESTful API, và MongoDB.
                                </li>
                            </ol>
                        </Typography>
                        <Typography variant='h5' style={{marginTop: '1rem'}} color='textPrimary'>                        
                            Tính cách                         
                        </Typography>
                        <Typography variant="body2" style={{marginTop: '1rem'}} color='textPrimary'> 
                            Bản thân là người vui vẻ, hòa đồng đôi khi ít nói. Với công viêc, luôn cố gắng để tạo ra sự tập trung cao độ. Sẵn sàng lắng nghe ý kiến và học hỏi từ đồng nghiệp.
                        </Typography>
                        <Typography variant='h5' style={{marginTop: '1rem'}} color='textPrimary'>                        
                            ReadAPP                      
                        </Typography>
                        <Typography variant="body2" style={{marginTop: '1rem'}} color='textPrimary'> 
                            Đây là ứng dụng nhỏ theo ý tưởng của bản thân về việc lựa chọn một cuốn sách dựa vào điểm số sau khi trả lời các câu hỏi. Sử dụng Redux để lưu trữ, thay đổi điểm số và lấy dữ liệu từ Goodreads. Các cuốn sách được khuyến khích đọc đều ngẫu nhiên ngay cả khi điểm số có trùng nhau. Trong tương lai sẽ mở rộng dữ liệu sách cũng như update thêm nhiều tính năng mới tích hợp Backend đăng nhập người dùng.
                        </Typography>
                        <Typography variant='h5' style={{marginTop: '1rem', width: '100%'}} color='textPrimary' > 
                           Sở thích 
                        </Typography>                             
                        <Typography color='textPrimary' variant='body1'> 
                            <ol>
                                <li>
                                    Chụp ảnh và nghe nhạc Rock
                                </li>
                                <li>
                                    Đọc sách và documentation, học thử ngôn ngữ lập trình mới.
                                </li>
                                <li>
                                    Chạy bộ
                                </li>
                            </ol>
                        </Typography>
                    </Grid>
                    <Grid
                        container lg={12} sm={12}
                        className={classes.contact}
                    >
                        <Typography color='textPrimary' style={{marginTop: '1rem'}}>
                            <strong> Thông tin liên hệ: </strong>
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
