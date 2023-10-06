/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. 
Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the 
SingleBook component and view its details. */

import React from "react"

import { useNavigate } from "react-router-dom";

import { useGetBooksQuery } from "../redux/api";

import Typography from '@mui/material/Typography';
import  Button  from "@mui/material/Button";
import { Card, CardActions, CardContent, CardMedia, Box, Grid, Container } from "@mui/material";

export default function AllBooks(){
    const navigate = useNavigate();
    const{ data, isLoading, error} = useGetBooksQuery();

    if (isLoading) {
		return <Typography>Loading...</Typography>;
	}

    if (error) {
		return <Typography>Error: {error.message}</Typography>;
	}

    console.log(isLoading? "Loading result" : "from useGetBooksQuery", data.books)
    return(
       <Box>
            <Typography variant="h3">Books In The Libary</Typography>
            {error && !data.books && (<p> Failed to load books from api</p>)}
         
                <Grid container spacing={2}>
                    {data.books
                    ?(
                    
                       data.books.map((book) =>{
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
                                            <Button onClick={()=> navigate("/books/" + book.id)} >Book Info</Button> 
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

