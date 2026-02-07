import React from 'react';
import './App.scss';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';
import { ThemeFromRoute } from './components/theme/ThemeFromRoute';
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
import { Button, Container, Menu, MenuItem } from '@mui/material';
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
import { ImageUpload } from './components/pages/imageUpload/ImageUpload';

const postsMenuItems = [
  { label: 'Students', to: '/students' },
  { label: 'Cars', to: '/cars' },
  { label: 'Ice Creams', to: '/ice-creams' },
  { label: 'Countries', to: '/countries' },
  { label: 'Users', to: '/users' },
  { label: 'Increment', to: '/increment' },
  { label: 'Books', to: '/books' },
];

function App() {
  const [postsAnchor, setPostsAnchor] = React.useState(null);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const logouthandler = () => {
    dispatch(logout());
  };

  const openPostsMenu = (e) => {
    setPostsAnchor(e.currentTarget);
  };

  const closePostsMenu = () => {
    setPostsAnchor(null);
  };

  return (
    <div className="App">
      <Router>
        <ThemeProvider>
          <DarkModeButton />

          <Container>
            {
              isAuthenticated &&
              <>
                <nav>
                  <Link to="/" className="pd-nav-link">Home</Link>

                  <Button
                    className="pd-nav-link pd-nav-posts-trigger"
                    onClick={openPostsMenu}
                    aria-controls={postsAnchor ? 'posts-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={postsAnchor ? 'true' : undefined}
                  >
                    Posts
                  </Button>
                  <Menu
                    id="posts-menu"
                    anchorEl={postsAnchor}
                    open={Boolean(postsAnchor)}
                    onClose={closePostsMenu}
                    MenuListProps={{ 'aria-labelledby': 'posts-menu-button' }}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    slotProps={{ paper: { className: 'pd-posts-menu-paper' } }}
                  >
                    {postsMenuItems.map((item) => (
                      <MenuItem key={item.to} component={Link} to={item.to} onClick={closePostsMenu}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Menu>

                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    className="pd-nav-logout"
                    onClick={logouthandler}
                  >
                    Logout
                  </Button>
                </nav>
              </>
            }

            <Routes>
              <Route path="/theme/:mode" element={<ThemeFromRoute />} />
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

            <Route path="/upload-image" element={<PrivateRoute><ImageUpload /></PrivateRoute>} />
          </Routes>
          </Container>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;