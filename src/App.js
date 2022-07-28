import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
// import axios from "axios";

function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
   </BrowserRouter>
  );
}

export default App;
