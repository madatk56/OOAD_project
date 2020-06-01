import React from 'react';

import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Login from './components/Login/Login';
import Companies from './components/main/Companies'
import Footer from './components/Footer';
import UsersPage from './components/main/UsersPage'
import AddNewJob from './components/main/AddNewJob/AddNewJob';
import PostPage from './components/main/PostPage';
function App() {
  
  return (
    <React.Fragment>
       <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/corp">
            <Companies />
          </Route>
          <Route exact path="/users">
            <UsersPage />
          </Route>
          <Route path="/corp/post">
            <AddNewJob />
          </Route>
          <Route path="/users/:id"> 
            <PostPage />
          </Route>
        </Switch>
    </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
