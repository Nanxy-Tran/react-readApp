import React, { useState } from "react";
import { Typography, Button, Fade, Grid, Paper } from "@material-ui/core";
import BookList from "../ResultBook/BookList";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import consultData from "../../dataSpecs/resultConsultant.json";
const scoreTheme = makeStyles({
  root: {
    paddingTop: "1rem",
  },
  frame: {
    justifyContent: "center",
  },
  paper: {
    borderRadius: " 1rem 0 1rem 1rem",
    display: "flex",
    flexDirection: "column",
    width: "80%",
    height: "100%",
    alignItems: "center",
    paddingBottom: "1rem",
    paddingTop: "1rem",
  },
  button: {
    width: "50%",
    height: "3rem",
    justifyContent: "center",
    borderRadius: "1.5rem",
  },
});

export default function Score(props) {
  const classes = scoreTheme();
  const [showBook, setShowBook] = useState(false);
  const handleShow = () => {
    setShowBook(true);
  };
  return (
    <React.Fragment>
      <Grid container className={classes.frame}>
        <Paper elevation={5} className={classes.paper}>
          <Typography display="block">
            So diem cua ban: {props.score}
          </Typography>
          <Typography
            style={{margin: '2rem'}}  
          >
            {props.score < 11
              ? consultData["invalid"]
              : consultData[props.score]}
          </Typography>
          {props.score < 11 ? (
            <Button
              color="primary"
              variant="contained"
              component={RouterLink}
              to="/"
              className={classes.button}
            >
              Ngủ !
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              onClick={handleShow}
              className={classes.button}
            >
              Nên đọc hôm nay !
            </Button>
          )}
          {showBook ? (
            <Grid container lg={12} className={classes.root}>
              <Fade in={true} timeout={1000}>
                <BookList score={props.score} />
              </Fade>
            </Grid>
          ) : (
            <div></div>
          )}
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
