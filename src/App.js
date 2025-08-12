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
import { useDispatch } from 'react-redux';
import { logout } from './actions/authActions';

function App() {

  const dispatch = useDispatch()

  const logouthandler = () => {
    dispatch(logout())
  }

  return (
    <div className="App">

      <DarkModeButton />


      <Container>
        <Router>
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

          <Routes>
            <Route path='/login' element={<Login />} />

            <Route path='/' element={<Home />} />
            <Route path="/post-view/:postId" element={<PostView />} />
            <Route path="/news-view/:newsId" element={<NewsView />} />
            <Route path="/students" element={<Students />} />
            <Route path="/student-view/:studentId" element={<StudentView />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/car-view/:carId" element={<CarView />} />
            <Route path="/ice-creams" element={<IceCreams />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/country-view/:countryId" element={<CountryView />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:userId" element={<UserView />} />
            <Route path="/increment" element={<Increment />} />

            <Route path="/books" element={<Books />} />
            <Route path="/book-view/:bookId" element={<ViewBook />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/edit-book/:bookId" element={<EditBook />} />


          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;