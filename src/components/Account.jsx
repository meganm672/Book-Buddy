
import React from 'react';
import { useGetUsersQuery, } from '../redux/api';
import { Typography, List, ListItem, ListItemText, Card, CardContent } from "@mui/material";

import Reservations from './Reservations';


export default function Account() {


  const { data: userDetails, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error: {isError.message}</Typography>;
  }
  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>My Account</Typography>
      <Card>
        <CardContent>
          <List>
            <ListItem>
              <ListItemText primary={userDetails.firstname} secondary="First Name" />
            </ListItem>
            <ListItem >
              <ListItemText primary={userDetails.lastname} secondary="Last Name" />
            </ListItem>
            <ListItem>
              <ListItemText primary={userDetails.email} secondary="Email" />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>Checked Out Books</Typography>
      <Reservations />

    </>
  );
}