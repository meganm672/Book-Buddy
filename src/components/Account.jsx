/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import React, {useState} from 'react';
import { useGetUsersQuery, useUpdateBookAvailabilityMutation } from '../redux/api';
import { Paper, Typography, Button } from "@mui/material";

export default function Account() {
 
  
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);
  const [returnError, setReturnError] = useState(null);

   
  const { data: userDetails, isError, isLoading } = useGetUsersQuery();
  const [updateBookAvailability] = useUpdateBookAvailabilityMutation();

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    setCheckoutError(null);

    try {
        // Call the mutation to check out a book
        const response = await updateBookAvailability({ bookId: "bookIdToCheckout", availability: true });
  
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

    const handleReturn = async () => {
        setIsReturning(true);
        setReturnError(null);
    
        try {
          // Call the mutation to return a book
          const response = await updateBookAvailability({ bookId: "bookIdToReturn", availability: false });
    
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
        <Paper elevation={6} sx={{ width: "50%", padding: 4, margin: "14px auto" }}>
          {isLoading ? (
            <Typography variant="body1">Loading user details...</Typography>
          ) : isError ? (
            <Typography variant="body1">Error fetching user details</Typography>
          ) : userDetails ? (
            <div>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Account Details
              </Typography>
              <Typography variant="body1">
                Welcome, {userDetails.firstname} {userDetails.lastname}!
              </Typography>
              <Typography variant="body1">Email: {userDetails.email}</Typography>
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
            </div>
          ) : null}
        </Paper>
      );
    }