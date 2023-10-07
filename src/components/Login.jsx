// import React, { useState, useEffect } from 'react';

// /* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */ 
// const LoginDetails = () => {
//     //
//     const[loginData, setLoginData] = useState(null);
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [loading, setLoading] = useState(true); 
//     useEffect(() => {

//         const fetchLoginData = async () => {
//             try{
//                 const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login',{
//                     method: 'POST',
//                     data: JSON.stringify({loginData})
//                 });
//                 const result = await response.json();
                
//                 console.log(result)
//                 setLoginData(result); 
//                 setLoading(false);
//                 setToken(data.Token)
//             } catch(error) {
//                 console.error('Login information invalid', error);
//                 setLoading(false); 

//             }
//         };

//         const userIsLoggedIn = checkUserLoggedIn();
//         setLoggedIn(userIsLoggedIn);

//         if(userIsLoggedIn){
//             fetchLoginData();
//         }
//     });

//     return (
//         <div>
//             {loading ? (
//                 <p> Currently loading account details...</p>
//             ) : loggedIn ? (
//                 <div>
//                     <h2>Account Details</h2>
//                 <p>Name: {loginData.name}</p>
//                 <p>Email: {loginData.email}</p>
//                 </div>
//             ) : (
//                 <p>
//                 Please login to access your account details{' '}
//                 <span>
//                     <a href="/login">log in</a>
//                 </span>{' '}
//                 or{' '}
//                 <span>
//                     <a href="/signup">create an account</a>
//                 </span>
//                 </p>
//             )}
//         </div>
//     );
// };

// export default LoginDetails; 