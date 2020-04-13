import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
import Articles from './views/Articles';
import Article from './views/Article';
import Admin from './views/Admin';



function App() {
  return (
    <Router>
    <div>
      {/* @TODO Header */}
      
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/articles">Articles</Link></li>
      <li><Link to="/article/5">Article</Link></li>
      <li><Link to="/admin">Admin</Link></li>
    </ul>
    



        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/article/:id">
            <Article />
          </Route>  
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      {/* @TODO Footer */}
      </div>
    </Router>
  );
}

export default App;
