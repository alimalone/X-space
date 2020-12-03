import Video from "./components/Video";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/main" component={Main}></Route>
        <Route path="/" component={Video}></Route>
      </Switch>
    </div>
  );
}

export default App;
