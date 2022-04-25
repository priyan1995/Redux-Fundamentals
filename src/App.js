import './App.css';
import Home from './components/home';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NewsView from './components/newsView';
import PostView from './components/postView';

function App() {

    return (
        <div className="App">
            <Router>

                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route path="/post-view/:pid" component={PostView} />

                    <Route path="/news-view/:newsId" component={NewsView} />

                </Switch>
            </Router>
        </div>
    );
}

export default App;