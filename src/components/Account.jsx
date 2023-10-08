/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { useGetUsersQuery } from '../redux/api';
import { Paper, Typography } from "@mui/material";





export default function Account() {
 
   // const [ update ] = useUpdateBookAvailabilityMutation();
   const { data: userDetails, isError, isLoading } = useGetUsersQuery()
    
   // const handleLogout = () => {
    // Perform logout action, e.g., clearing authentication state
    // Redirect to the login page
    // navigate("/login"); 
  //  };


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
          
        </div>
      ) : null}
    </Paper>
  );
};