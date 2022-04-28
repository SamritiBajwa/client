import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Dashboard from "./views/Dashboard"
import Create from "./views/Create"
import OneAuthor from "./views/OneAuthor"
import EditAuthor from "./views/EditAuthor"
import Message from "./views/Message"
//import { Link } from "react-router-dom"
import Main from "./views/Main"

function App() {
  return (
    <BrowserRouter>
    <h1> Favorite Authors! </h1>
    <p>
      <Link to="/authors/new">Add an Author</Link> |
      <Link to="/authors">Dashboard</Link> |
      <Link to="/">Home</Link>
    </p>
      <Switch>
      <Route exact path="/message">
          <Message/>
        </Route>
        <Route exact path="/authors">
          <Dashboard/>
        </Route>
        <Route exact path="/authors/new">
          <Create/>
        </Route>
        <Route exact path="/authors/:id">
          <OneAuthor/>
        </Route>
        <Route exact path="/authors/:id/edit">
          <EditAuthor/>
        </Route>
        <Route exact path="/">
          <Main/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;

