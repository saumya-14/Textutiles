// import React from 'react'; // Don't forget to import React
import './App.css';

import Navbar from './components/navbar';
import Textform from'./components/textform';
import About from'./components/about';
import React,{usestate} from 'react'
import { useState } from 'react';
// import Alert from './components/alert';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  // const [modebtn,setmodebtn]=useState('DARK MODE'); 
  const [mode,setmode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      showAlert("DARK MODE HAS BEEN ENABLED","success");
      // setmodebtn('LIGHT MODE')
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("LIGHT MODE HAS BEEN ENABLED","success");
      // setmodebtn('DARK MODE')
    }
  }
  return (
    <>
    <Router>
  <Navbar title="Textutils2" mode={mode} togglemode={togglemode}/>
  {/* <Alert  alert="This is alert"/>  */}
  <div className="container my-3" >
  <Routes>
    
    <Route exact path="/" element={ <Textform  heading="ENTER THE TEXT TO ANALYZE" mode={mode}/>}/>
        <Route path='/about' element={<About/>}></Route>
    
    
   
   
    </Routes>
 
 
  
  </div>
  </Router>
  
  </>
    
  );
}

export default App;
