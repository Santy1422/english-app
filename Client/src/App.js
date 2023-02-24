import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router";
import { Home } from './Components/Home';
import { Panel } from './Components/Panel';
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
