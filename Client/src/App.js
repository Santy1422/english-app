import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router";
import { Home } from './Components/Home';
import { Panel } from './Components/Panel';
import axios from "axios"
import { Profile } from './Components/Profile';
import { NewWord } from './Components/NewWord';
import { Cards } from './Components/Cards';
// axios.defaults.baseURL = "https://english-app-production.up.railway.app"
axios.defaults.baseURL = "https://localhost:8080"

function App() {
  return (
    <div className="App">

      <Switch>

      <Route exact path="/" component={Home} />

      <Route exact path="/userPanel" component={Panel} />

      </Switch>
    </div>
  );
}

export default App;
