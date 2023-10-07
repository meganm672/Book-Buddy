/* TODO - add your code to create a functional React component that renders details for a single book.
 Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useGetSingleBookQuery } from "../redux/api";

import Typography from '@mui/material/Typography';
import  Button  from "@mui/material/Button";
import { Card, CardActions, CardContent, CardMedia, Box, Grid} from "@mui/material";


export default function SingleBook() {
    
    const  params = useParams();
    const bookId = params.id;
    console.log("book id from params",bookId);
    const navigate = useNavigate()

    
    const{data, isLoading, error} = useGetSingleBookQuery(bookId);
   
    if (isLoading) {
		return <Typography>Loading...</Typography>;
	}

    if (error) {
		return <Typography>Error: {error.message}</Typography>;
	}
    console.log(isLoading? "Loading result" : "from useGetSingleBookQuery", data.book);

 return(
     <Box sx= {{margin: 5}}>
         {error && !data && (<p>Failed to load Book.</p>)}
         <Grid container justifyContent="center">
            <Grid item >
         <Card sx={{maxWidth: 370}}>
             <CardMedia 
             component="img"
             alt={data.book.title}
             height="500"
             image={data.book.coverimage}
             />
            
             <CardContent>
                 <Typography variant="h3">{data.book.title}</Typography>
                 <Typography><b>Author:</b> {data.book.author}</Typography>
                 <Typography><b>Description:</b> {data.book.description}</Typography>
                 <Typography><b>Available:</b>{data.book.available ? "true" : "false"}</Typography>
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
