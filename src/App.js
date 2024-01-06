import logo from './logo.svg';
import './App.css';
import NavBar from './componants/NavBar';
import TextForm from './componants/TextForm';
// import About from './componants/About';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
     if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
     }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
     }
  };
  return (
    <>
      <NavBar title="TextUtil" mode= {mode} toggleMode = {toggleMode} />  
      <div className="container my-3" >
        <TextForm heading="Enter the text ot analze below" mode = {mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
