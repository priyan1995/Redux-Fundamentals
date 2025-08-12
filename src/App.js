import './App.scss';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import PostView from './components/pages/posts/postView';
import NewsView from './components/pages/news/newsView';
import Students from './components/pages/student/students';
import StudentView from './components/pages/student/studentView';
import CarView from './components/pages/cars/carView';
import CountryView from './components/pages/countries/countryView';
import Increment from './components/Increment';
import Countries from './components/pages/countries/countries';
import IceCreams from './components/iceCreams';
import { DarkModeButton } from './components/common/DarkModeButton';
import Cars from './components/pages/cars/cars';
import { Button, Container } from '@mui/material';
import { Users } from './components/pages/users/users';
import UserView from './components/pages/users/userView';
import { Books } from './components/pages/books/Books';
import { ViewBook } from './components/pages/books/ViewBook';
import { AddBook } from './components/pages/books/AddBook';
import { EditBook } from './components/pages/books/EditBook';
import { Login } from './components/auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './actions/authActions';
import { PrivateRoute } from './components/auth/PrivateRoute';

function App() {

  const dispatch = useDispatch()

  const logouthandler = () => {
    dispatch(logout())
  }

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="App">

      <DarkModeButton />


      <Container>
        <Router>

          {
            isAuthenticated &&
            <>
              <nav>

                <Link to="/">Home</Link><br />
                <Link to="/students">Students</Link><br />
                <Link to="/cars">Cars</Link><br />
                <Link to="/ice-creams">Ice Creams</Link><br />
                <Link to="/countries">Countries</Link><br />
                <Link to="/users">Users</Link><br />
                <Link to="/increment">Increment</Link>
                <Link to="/books">Books</Link>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className='pd-nav-logout'
                  onClick={logouthandler}
                >Logout</Button>

              </nav>
            </>
          }





          <Routes>
            <Route path='/login' element={<Login />} />

            <Route path='/' element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/post-view/:postId" element={<PrivateRoute><PostView /></PrivateRoute>} />
            <Route path="/news-view/:newsId" element={<PrivateRoute><NewsView /></PrivateRoute>} />
            <Route path="/students" element={<PrivateRoute><Students /></PrivateRoute>} />
            <Route path="/student-view/:studentId" element={<PrivateRoute><StudentView /></PrivateRoute>} />
            <Route path="/cars" element={<PrivateRoute><Cars /></PrivateRoute>} />
            <Route path="/car-view/:carId" element={<PrivateRoute><CarView /></PrivateRoute>} />
            <Route path="/ice-creams" element={<PrivateRoute><IceCreams /></PrivateRoute>} />
            <Route path="/countries" element={<PrivateRoute><Countries /></PrivateRoute>} />
            <Route path="/country-view/:countryId" element={<PrivateRoute><CountryView /></PrivateRoute>} />
            <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
            <Route path="/users/:userId" element={<PrivateRoute><UserView /></PrivateRoute>} />
            <Route path="/increment" element={<PrivateRoute><Increment /></PrivateRoute>} />

            <Route path="/books" element={<PrivateRoute><Books /></PrivateRoute>} />
            <Route path="/book-view/:bookId" element={<PrivateRoute><ViewBook /></PrivateRoute>} />
            <Route path="/add-book" element={<PrivateRoute><AddBook /></PrivateRoute>} />
            <Route path="/edit-book/:bookId" element={<PrivateRoute><EditBook /></PrivateRoute>} />


          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;