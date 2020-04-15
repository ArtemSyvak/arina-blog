import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import { AuthProvider } from './providers/Auth';
import PrivateRoute from './providers/PrivateRoute';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Home from './views/Home';
import About from './views/About';
import Articles from './views/Articles';
import Article from './views/Article';
import Admin from './views/Admin';



function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          {/* @TODO Header */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/article/5">Article</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/article/:id" component={Article} />
          <PrivateRoute exact path="/admin" component={Admin} />
        {/* @TODO Footer */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
