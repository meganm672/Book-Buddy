import { useSelector} from 'react-redux'

//Import the components into the app
import Books from "./components/Books"
import Navigations from './components/Navigations'
import LoginForm from './components/LoginForm'
import Account from './components/Account';
import SingleBook from './components/SingleBook'


// import components from react router dom
import { Routes, Route, Navigate } from "react-router-dom"


function App() {
  const token = useSelector(state => state.token);

  return (
    <>
      <Navigations />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/login" element={<LoginForm type="login" />} />
        <Route path="/register" element={<LoginForm type="register" />} />
        {<Route path="/account" element={token ? <Account /> : <Navigate to="/login" />} />}
      </Routes>
    </>
  )
}

export default App
