import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert =(message,type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#2b2844';
      showAlert("Dark mode is enabled", "success")
      
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success")   
    }
  } 
  return (
    <>
     
      <Navbar title="TextEditor" aboutText="About TextEditor" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>
      </div>
      {/* <Router>
      <Navbar title="TextEditor" aboutText="About TextEditor" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path='/about'  element={<About/>}/>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>}/>
      </Routes>
      </div>
      </Router> */} 
    </>
  );
}

export default App;
