/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. 
Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the 
SingleBook component and view its details. */

import React, {useState, useEffect } from "react"

import Typography from '@mui/material/Typography';
import  Button  from "@mui/material/Button";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";

export default function AllBooks(){
    const [books, setBooks]= useState([]);
    const [error, setError] = useState(null);

    useEffect(() =>{
        async function fetchBookData(){
            try{
                const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
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
       <Card>
            <Typography variant="h3">Books In The Libary</Typography>
            {error && !books && (<p> Failed to load books from api</p>)}
            {books
            ?(
                books.map((book) =>{
                    return(
                        <Card key={book.title} >
                        <CardMedia
                            component="img"
                            alt={book.title}
                            height="400"
                            // width={"300"}
                            image={book.coverimage} 
                        />
                        <CardContent>
                            <Typography variant="h3">{book.title}</Typography>
                            <Typography><b> Author: </b>{book.author}</Typography>
                            <Typography> <b>Description: </b>{book.description}</Typography>
                            <Typography><b>Availible: </b> {book.available}</Typography>
                        </CardContent>
                            <CardActionArea>
                                {/* <Button onClick={()=> navigate("/books/" + books.id)} >Book Info</Button>  */}
                            </CardActionArea>
                     
                    </Card>
                    )
                })
            ) : !error && <p>Loading...</p>}
       </Card>
    )
}