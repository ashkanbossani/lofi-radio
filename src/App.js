import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RadioPage from "./pages/RadioPage/RadioPage";
// import axios from "axios";

function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/music" component={RadioPage} />
    </Switch>
   </BrowserRouter>
  );
}

export default App;
