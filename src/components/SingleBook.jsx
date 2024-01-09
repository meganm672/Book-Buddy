
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useGetSingleBookQuery, } from "../redux/api";

import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { Card, CardActions, CardContent, CardMedia, Box, Grid } from "@mui/material";
import CheckoutBookButton from "./CheckoutBookButton";

export default function SingleBook() {

    const params = useParams();
    const bookId = params.id;

    const navigate = useNavigate()

    const { data, isLoading, error } = useGetSingleBookQuery(bookId);

    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography>Error: {error.message}</Typography>;
    }

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
                            <CheckoutBookButton bookId={data.book.id} />
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )

} 