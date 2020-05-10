import React, { useState, useEffect } from "react";
import convernant from "xml-js";
import {
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Collapse,
    Button,
    LinearProgress,   
} from "@material-ui/core";
import {Rating} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';


const bookCardStyles = makeStyles({
    frame: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    card: {},

})

export default function SpecificBookCard(props) {
    const classes = bookCardStyles();
    const [book, setBook] = useState([]);
    const [show, setShow] = useState(false);

    const handleReadmore = () => {
        setShow(prev => !prev);
    }

    useEffect(() => {
        fetch(
            `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/show/${props.bookID}.json?key=4MY78ht0qllA934pWerxQ`
        )
            .then((response) => response.text())
            .then((res) => {
                setBook((book) => [
                    convernant.xml2js(res, {
                        compact: true,
                        ignoreCdata: false,
                        ignoreComment: true,
                        ignoreAttributes: true,
                    }),
                ]);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <React.Fragment>
            <Grid container>
                <Card className={classes.frame}>
                    {book.length === 0 ?
                        <div>
                            <LinearProgress color='primary' variant="query" />
                        </div>
                        : <div></div>}
                    <div style={{ height: '100%' }}>
                        {book.map((item) => (
                            <div key={item.GoodreadsResponse.book.id._text}
                                style={{ display: 'flex' }}
                            >
                                <CardMedia
                                    image={`${item.GoodreadsResponse.book.image_url._text}`}
                                    style={{ height: "20vh", width: "15vw", margin: "0.5rem", borderRadius: '1rem' }}
                                />
                                <CardContent
                                    style={{ width: '70%' }}
                                >
                                    <Typography>
                                        Tựa đề:{" "}
                                        <strong>
                                            {item.GoodreadsResponse.book.title._cdata ||
                                                item.GoodreadsResponse.book.title._text}
                                        </strong>
                                    </Typography>
                                    <Typography>
                                        Tác giả: {""}{" "}
                                        <strong>
                                            {JSON.stringify(item.GoodreadsResponse.book.authors.author.name)}
                                        </strong>
                                    </Typography>
                                    <Typography>
                                        Đánh giá từ GoodReads.
                                        <Rating  readOnly value={item.GoodreadsResponse.book.average_rating}/>
                                    </Typography>
                                    <Collapse in={show}>
                                        <div>
                                            <Typography variant='subtitle2'>
                                                {item.GoodreadsResponse.book.description._cdata ||
                                                    item.GoodreadsResponse.book.description._text}
                                            </Typography>
                                        </div>
                                    </Collapse>
                                    <Button onClick={handleReadmore} variant='outlined' color='primary'>
                                        Tóm tắt
                                    </Button>
                                    <Button href={`${item.GoodreadsResponse.book.link}`}
                                            target="_blank" 
                                            variant="outlined"
                                            color="primary"
                                            rel="noreferrer noopener"
                                    > 
                                        GoodReads 
                                    </Button>
                                </CardContent>
                            </div>
                        ))}
                    </div>
                </Card>
                {book.length !== 0 ?
                    <Typography variant='caption' align='center'>
                        Cảm ơn, chúc bạn đọc vui :3
                    </Typography>
                    : <div></div>}
            </Grid>
        </React.Fragment>
    );
}
