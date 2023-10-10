/* TODO - add your code to create a functional React component that renders details for a single book.
 Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useGetSingleBookQuery, useUpdateBookAvailabilityMutation } from "../redux/api";

import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { Card, CardActions, CardContent, CardMedia, Box, Grid } from "@mui/material";


export default function SingleBook() {

    const params = useParams();
    const bookId = params.id;
    console.log("book id from params", bookId);
    const navigate = useNavigate()

    const [updateBookAvailability] = useUpdateBookAvailabilityMutation();
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [checkoutError, setCheckoutError] = useState(null);
    const [isReturning, setIsReturning] = useState(false);
    const [returnError, setReturnError] = useState(null);


    const { data, isLoading, error } = useGetSingleBookQuery(bookId);

    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography>Error: {error.message}</Typography>;
    }
    console.log(isLoading ? "Loading result" : "from useGetSingleBookQuery", data.book);

    async function handleCheckout() {
        setIsCheckingOut(true);
        setCheckoutError(null);

        try {
            // Call the mutation to check out a book
            // When calling the mutation we need to pass the parameters only 
            const response = await updateBookAvailability(bookId, false);
           

            // Checking if the mutation was successful 
            if (response.error) {
                setCheckoutError("Failed to check out the book.");
            } else {
                // Book successfully checked out
            }
        } catch (error) {
            console.error("Error checking out the book:", error);
            setCheckoutError("An error occurred while checking out the book.");
        } finally {
            setIsCheckingOut(false);
        }
    };

    async function handleReturn () {
        setIsReturning(true);
        setReturnError(null);
    
        try {
          // Call the mutation to return a book
          const response = await updateBookAvailability(bookId, true);
            
          // Check if the mutation was successful 
          if (response.error) {
            setReturnError("Failed to return the book.");
          } else {
            // Book successfully returned
          }
        } catch (error) {
          console.error("Error returning the book:", error);
          setReturnError("An error occurred while returning the book.");
        } finally {
          setIsReturning(false);
        }
      };




return (
    <Box sx={{ margin: 5 }}>
        {error && !data && (<p>Failed to load Book.</p>)}
        <Grid container justifyContent="center">
            <Grid item >
                <Card sx={{ maxWidth: 370 }}>
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
                        <Button onClick={() => navigate("/books/")} > Back </Button>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{ margin: "8px 0", width: "100%" }}
                            onClick={handleCheckout}
                            disabled={isCheckingOut}
                        >
                            {isCheckingOut ? "Checking Out..." : "Checkout Book"}
                        </Button>
                        {checkoutError && (
                            <Typography variant="body1" color="error">
                                {checkoutError}
                            </Typography>
                        )}

                <Button
                variant="contained"
                size="large"
                sx={{ margin: "8px 0", width: "100%" }}
                onClick={handleReturn}
                disabled={isReturning}
              >
                {isReturning ? "Returning..." : "Return Book"}
              </Button>
              {returnError && (
                <Typography variant="body1" color="error">
                  {returnError}
                </Typography>
              )}  
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </Box>
)

  } 