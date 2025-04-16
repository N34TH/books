import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

function BookCard({ book }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{book.title}</Typography>
        <Typography variant="subtitle1">Author: {book.author}</Typography>
        <Typography variant="body2">Genre: {book.genre}</Typography>
        <Button variant="contained" color="primary">Reserve</Button>
      </CardContent>
    </Card>
  );
}

export default BookCard;