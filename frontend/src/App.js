import Landing from "./layout/Landing";
import "./App.css";
import Navbar from "./layout/Navbar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Routes from "./components/routes/Routes";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
