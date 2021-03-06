import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import BookIdData from "../../dataSpecs/bookID.json";
import { CircularProgress, Typography } from "@material-ui/core";

export default function Book(props) {
  const randomIndex = Math.floor(Math.random() * 3);  
  let bookCollection = BookIdData[props.score][randomIndex];
  const [bookIDs, setBookIDs] = useState([]);
  useEffect(() => {
    setBookIDs([bookCollection]);
  }, [props, bookCollection]);

  return (
    <React.Fragment>
      {bookIDs.length == 0 ?        
          <CircularProgress color="primary" />          
        : <div></div>
      }    
      {bookIDs.map((item) => (
        <BookCard bookID={item} />
      ))}
    </React.Fragment>
  );
}
