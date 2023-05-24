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
import { PostCard } from './Components/PostCard';
import { NewPost } from './Components/NewPost';

axios.defaults.baseURL = "https://english-app-production.up.railway.app"
// axios.defaults.baseURL = "http://localhost:8080"

// axios.defaults.withCredentials = true;

function App() {

  const location = useLocation()
  return (
    
    <div className="App">
      <Switch>
      {location.pathname !== "/" && <Panel/>}

      <Route exact path="/" component={Home} />
      <Route  path="/post/:id" component={PostPage} />
      <Route exact path="/post" component={PostCard} />
      <Route exact path="/dashboard" component={Panel} />
      <Route exact path="/dashboard/card" component={Cards} />
      <Route exact path="/dashboard/addCard" component={NewWord} />
      <Route exact path="/post/addPost" component={NewPost} />


      </Switch>
    </div>
  );
}

export default App;
