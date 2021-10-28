import { Route, Switch } from "react-router";
import "./App.css";
import Tours from "./Tours";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Tours} />
    </Switch>
  );
}

export default App;
