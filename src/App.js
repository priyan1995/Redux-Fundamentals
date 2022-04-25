import './App.css';
import Home from './components/home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NewsView from './components/newsView';

function App() {

    return (
        <div className="App">
            <Router>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/news-view/:id">
                        <NewsView />
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;