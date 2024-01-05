import { useSelector, useDispatch } from 'react-redux'

//Import the components into the app
import Books from "./components/Books"
import Navigations from './components/Navigations'
import LoginForm from './components/LoginForm'
import Account from './components/Account';
import SingleBook from './components/SingleBook'


// import components from react router dom
import { Routes, Route, useNavigate } from "react-router-dom"




function App() { 
  const token = useSelector(state => state.token);
  console.log("The Token is :", token)


  return (
    <>
      <Navigations />
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/login" element={<LoginForm />} />
        {token && <Route path="/account" element={<Account />} />}
      </Routes>
    </>
  )
}

export default App
