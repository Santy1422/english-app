import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router";
import { Home } from './Components/Home';
import { Panel } from './Components/Panel';
import axios from "axios"
import { PostPage } from './Components/PostPage';

axios.defaults.baseURL = "https://english-app-production.up.railway.app"
// axios.defaults.baseURL = "http://localhost:8080"

// axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Switch>

      <Route exact path="/" component={Home} />

      <Route exact path="/userPanel" component={Panel} />
      <Route exact path="/post/:id" component={PostPage} />

      </Switch>
    </div>
  );
}

export default App;
