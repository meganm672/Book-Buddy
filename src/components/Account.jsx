/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import React, { useEffect, useState } from 'react';
import LoginForm from '../components/LoginForm';
import { useUpdateBookAvailabilityMutation } from '../redux/api';





export default function Account() {
   const [loginData, setLoginData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [ update ] = useUpdateBookAvailabilityMutation();
    

  

return (
    <div>
        {loading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>error</p>
        ) : loginData ? (
            <LoginForm loginData={loginData} />
        ) : (
            <p>Please log in to access your account details.</p>
        ) }
    </div>
     
);

}