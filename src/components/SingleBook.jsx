/* TODO - add your code to create a functional React component that renders details for a single book.
 Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Typography from '@mui/material/Typography';
import  Button  from "@mui/material/Button";
import { Card, CardActions, CardContent, CardMedia, Box, Grid} from "@mui/material";


export default function SingleBook() {
  const [singleBook, setSingleBook] = useState([]);
  const [error, setError] = useState(null);
  const  params = useParams();
  const bookId = params.id;
  console.log(bookId);
const navigate = useNavigate()

  useEffect(() => {
    async function fetchSingleBookData(bookId){
        try{
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/" + bookId);
            const result = await response.json();
            console.log("from fetch single book",result.book)
            setSingleBook(result.book)
       
     }catch(e){
            console.error(e)
            setError(e)
        }
    }
    fetchSingleBookData(bookId)
  }, [bookId]);
  

 return(
     <Box sx= {{margin: 5}}>
         {error && !SingleBook && (<p>Failed to load Book.</p>)}
         <Grid container>
            <Grid item sx={{justifyContent: "center"}}>
         <Card sx={{maxWidth: 370}}>
             <CardMedia 
             component="img"
             alt={singleBook.title}
             height="500"
             image={singleBook.coverimage}
             />
            
             <CardContent>
                 <Typography variant="h3">{singleBook.title}</Typography>
                 <Typography><b>Author:</b> {singleBook.author}</Typography>
                 <Typography><b>Description:</b> {singleBook.description}</Typography>
                 <Typography><b>Available:</b>{singleBook.available ? "true" : "false"}</Typography>
             </CardContent>
             <CardActions>
                                            <Button onClick={()=> navigate("/books/")} > Back </Button> 
                                        </CardActions>
         </Card>
         </Grid>
         </Grid>
     </Box>
     ) 
}
