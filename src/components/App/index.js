import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../../App.css';
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Welcome from '../Welcome'
import Login from '../Login'
import Signup from '../Signup'
import ErrorPage from '../ErrorPage';

function App() {
  return (
    <div>
    <Router>
      <Header/>

        <Route exact path="/" component={Landing} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={ErrorPage} />

      <Footer/>
    </Router>
    </div>
  );
}

export default App;
