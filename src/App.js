import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RadioPage from "./pages/RadioPage/RadioPage";
import ChillPage from "./pages/ChillPage/ChillPage";


function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/music" component={RadioPage} />
      <Route path="/chill" component={ChillPage} />
    </Switch>
   </BrowserRouter>
  );
}

export default App;
