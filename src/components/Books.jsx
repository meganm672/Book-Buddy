/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. 
Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the 
SingleBook component and view its details. */

import React, {useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"

import Typography from '@mui/material/Typography';
import  Button  from "@mui/material/Button";
import { Card, CardActions, CardContent, CardMedia, Box, Grid, Container } from "@mui/material";

export default function AllBooks(){
    const [books, setBooks]= useState([]);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() =>{
        async function fetchBookData(){
            try{
                const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books");
            const result = await response.json();
            console.log(result.books);
            setBooks(result.books)
            }catch(e){
                console.error(e)
                setError(e)
            }
        }
        fetchBookData();
    },[])

    return(
       <Box>
            <Typography variant="h3">Books In The Libary</Typography>
            {error && !books && (<p> Failed to load books from api</p>)}
         
                <Grid container spacing={2}>
                    {books
                    ?(
                    
                        books.map((book) =>{
                            return(
                                <Grid item key={book.title}>
                                    <Card sx={{maxWidth: 350, margin: 2}} >
                                        <CardMedia
                                            component="img"
                                            alt={book.title}
                                            height="500"
                                            image={book.coverimage} 
                                            />
                                        <CardContent>
                                            <Typography variant="h3">{book.title}</Typography>
                                            <Typography><b> Author: </b>{book.author}</Typography>
                                            <Typography> <b>Description: </b>{book.description}</Typography>
                                            <Typography><b>Available: </b> {book.available ? "true" : "false"}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={()=> navigate("/books/" + books.id)} >Book Info</Button> 
                                        </CardActions>
                                    </Card>
                                 </Grid>
                                )
                                })
                    ) : !error && <p>Loading...</p>}
                </Grid>
       
       </Box>
    )
}

import React, { useState, useEffect } from "react";
function SingleBook() {
  const [book, setSingleBook] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books", {
      method: "GET",
      
    })
      .then((SingleBook) => SingleBook.json())
      .then((fetchBookData) => {
        setSingleBook(result.SingleBook);
        console.log(SingleBook);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
    
    </div>
  );
}
