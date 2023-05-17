import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router";
import { Home } from './Components/Home';
import { Panel } from './Components/Panel';
import axios from "axios"
import { PostPage } from './Components/PostPage';
import { NewWord } from './Components/NewWord';
import { Cards } from './Components/Card/Cards';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

axios.defaults.baseURL = "https://english-app-production.up.railway.app"
// axios.defaults.baseURL = "http://localhost:8080"

// axios.defaults.withCredentials = true;

function App() {

  const location = useLocation()
  return (
    
    <div className="App">

      <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/post/:id" component={PostPage} />

      </Switch>
    </div>
  );
}

export default App;
