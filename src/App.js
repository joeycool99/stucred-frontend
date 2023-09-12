import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/./Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import KYC from './components/KYC';
import KycSaved from './components/KycSaved';

function App() {
  return (
    <Router>
     <Navbar /> 
      <div className="ui container">
        <ToastContainer position="top-center" /> 
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/kyc" component={KYC} />
          <Route path="/kyc-save" component={KycSaved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
