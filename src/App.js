import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Users from './components/Users'
import Tickets from './components/Tickets';

function App() {
  return (
    <div className='container'> 
      <div className = 'row'>
        <div className = 'col-4-md'>
        <Projects />
        </div>
        <div className = 'col-3-md'>
        <Users/>
        </div>
        <div className = 'col-3-md'>
        <Tickets/>
        </div>
      </div>

      

      
     {/*  <form id="signInForm">
      <h5>Sign In Form</h5>
        <label >Username:</label>
        <input type="text" />
        <label >Password:</label>
        <input type="text" />
      </form>

      <form id="signUpForm">
        <h5>Sign Up Form</h5>
        <label >First Name:</label>
        <input type="text" />
        <label >Username:</label>
        <input type="text" />
        <label >Password:</label>
        <input type="text" />
      </form> */}
        
    </div>
  );
}

export default App;
