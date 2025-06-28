import './App.scss';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import NewsView from './components/newsView';
import PostView from './components/postView';
import Students from './components/students';
import StudentView from './components/studentView';
import Cars from './components/cars';
import CarView from './components/carView';
import IceCreams from './components/iceCreams';
import countries from './components/countries';
import CountryView from './components/countryView';
import { Users } from './components/users';
import Increment from './components/Increment';
import { Container, FormControlLabel } from '@mui/material';
import { DarkModeButton } from './components/DarkModeButton';
import Countries from './components/countries';

function App() {



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
          </nav>

          <Routes>
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
            <Route path="/increment" element={<Increment />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;