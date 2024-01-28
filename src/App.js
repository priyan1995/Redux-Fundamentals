import './App.css';
import Home from './components/home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
import  CountryView  from './components/countryView';
import { Users } from './components/users';
import  Increment  from './components/Increment';

function App() {

    return (
        <div className="App">
            <Router>

                <nav>
                    <Link to='/home'>Home</Link>
                    <br />
                    <Link to='/students'>Students</Link>
                    <br />
                    <Link to='/cars'>Cars</Link>
                    <br />
                    <Link to='/ice-creams'>Ice Creams</Link>
                    <br />
                    <Link to='/countries'>Countries</Link>
                    <br />
                    <Link to='/users'>Users</Link>
                     <br />
                    <Link to='/increment'>Increment</Link>
                </nav>

                <Switch>

                    <Route exact path="/home" component={Home} />

                    <Route path="/post-view/:postId" component={PostView} />

                    <Route path="/news-view/:newsId" component={NewsView} />

                    <Route path='/students' component={Students} />

                    <Route path='/student-view/:studentId' component={StudentView} />

                    <Route path='/cars' component={Cars} />

                    <Route path='/car-view/:carId' component={CarView} />

                    <Route path='/ice-creams' component={IceCreams} />
                    
                    <Route path='/countries' component={countries} />

                    <Route path='/country-view/:countryId' component={CountryView} />

                    <Route path='/users' component={Users} />

                    <Route path='/increment' component={Increment} />

                     
                </Switch>
            </Router>
        </div>
    );
}

export default App;