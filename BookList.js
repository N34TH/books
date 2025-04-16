import React from "react";
import BookCard from "./BookCard";
import { Grid } from "@mui/material";

function BookList({ books }) {
  return (
    <Grid container spacing={3}>
      {books.map(book => (
        <Grid item key={book.id} xs={12} sm={6} md={4}>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
}

export default BookList;