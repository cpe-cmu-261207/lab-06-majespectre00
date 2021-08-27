import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Current from './components/Current';
import Select from './components/Select';
import Result from './components/Result';
import About from './components/About';

function App() {
  return (
    <Router>
      <Navbar />

    <Switch>
      <Route path = '/current'>

      <Current/>
      <br/>
      </Route>
    
  
      <Route path = '/history/select'>
     
      <Select/>

      <br />
      </Route>

      

      <Route path = '/history/result'>
        
        <Result/>
      
      <br /> 
      </Route>
  
      
    
      <Route path='/about'>
      <About/>
  
      </Route>

      <Route path ='/'>
        <Current/>
        <br/>
      </Route>

    </Switch>
     

    </Router>
  );
}

export default App;
