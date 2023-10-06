/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import React, { useEffect } from 'react';
import LoginDetails from './components/Login';



export default function Account() {
   const [loginData, setLoginData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
    

   useEffect (() => {
    async function fetchAccountData () {
       try {
         const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me');
    if (response.ok) {
        const data = await response.json();
        setLoginData(data.loginData);
        setLoading(false);
    } else {
        setError('Failed to fetch account data');
        setLoading(false);
    }

    } catch (error) {
        setError(error.message);
        setLoading(false);
    }

    }
        fetchAccountData();
   }, []);


return (
    <div>
        {loading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>error</p>
        ) : loginData ? (
            <LoginDetails loginData={loginData} />
        ) : (
            <p>Please log in to access your account details.</p>
        ) }
    </div>
     
);

}