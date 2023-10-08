import { useSelector, useDispatch } from 'react-redux'
import bookLogo from './assets/books.png'

//Import the components into the app
import Books from "./components/Books"
import Navigations from './components/Navigations'
import LoginForm from './components/LoginForm'
import Account from './components/Account';
import SingleBook from './components/SingleBook'

import { setToken } from './redux/tokenSlice'
// import components from react router dom
import { Routes, Route } from "react-router-dom"

import { Button } from '@mui/material'


function App() {
  const token = useSelector(state => state.token);
  console.log("The Token is :", token)

  const dispatch= useDispatch();
 
  
  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <p>Don't forget to set up React Router to navigate between the different views of your single page application!</p>
    <Navigations />
    {token && (
      <Button onClick={() => dispatch(setToken({ token: null }))} >Logout</Button>
    )}
    {/* {token ? <Account /> : <LoginForm />} */}
      <Routes>
        <Route path="/books" element={<Books />}/>
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="/register" element={<Register/>} /> */}
        {token && <Route path="/account" element={<Account />}/>}
      </Routes>


    </>
  )
}

export default App
