import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Signup from "./Signup";
import Login from "./Login";
import Blog from "./Blog";

function App() {
  return (
    < >
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Login} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
