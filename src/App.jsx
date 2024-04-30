import About from "./component/About";
import Home from "./component/Home";
import Nav from "./component/Nav";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React, { useState } from 'react';
import Alert from "./Alert";


function App() {
  const [mode, setmode] = useState("light");

  const [difcol, setdifcol] = useState("light");

  function removeclass() {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-light");
  }
  function dColor(col) {
    removeclass();
    document.body.classList.add("bg-"+col)
    if(difcol==="light"){
      setdifcol("dark");
      document.body.style.backgroundColor="#042743"
      showalert("dark mode has been enabled","success");
    }else{
      setdifcol("light");
      document.body.style.backgroundColor="white";
      showalert("light mode has been enabled","success");
    }
  }

  // you can use in modee function ... so you are pass this props
  // const [modee, setmodee] = useState("light");


  // function showmodee() {
  //  if(modee==="light"){
  //   setmodee("Dark");
  //  }else{
  //   setmodee("light")
  //  }
  // }

 
  const [alert, setalert] = useState("");

  function showalert(msg,type) {
    setalert({
      msg:msg,
      type:type
    })
    
    setTimeout(() => {
      setalert("");
    }, 2000);
  }
 
 

  function colorMode() {
    removeclass();
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor="#042743";
      showalert("dark mode has been enabled","success");
      document.title="TextUtility-darkmode";
      
    // setInterval(() => {
    //   document.title="this is the dark mode ON..."
    // }, 2000);
    // setInterval(() => {
    //   document.title="enable light mode..."
    // }, 1500);
    }else{
      setmode("light");
      document.body.style.backgroundColor="white";
      showalert("light mode has been enabled","success");
      document.title="TextUtility";
    }

    
  }
  
  return (
    <>
    <BrowserRouter>
      {/* <Nav/> */}
      <Nav title={"TextUtility"} difcol={difcol} dColor={dColor} mode={mode} colorMode={colorMode} showalert={showalert} />
      <Alert  alert={alert}  />
      {/* <About title={"Change The Mode"}/> */}
      {/* <Home heding={"enter the text and click button"} /> */}
      <Routes>
        <Route index element={<Home heding={"enter the text and click button"} mode={mode} showalert={showalert} />} />
        <Route path="/home" element={<Home heding={"enter the text and click button"} mode={mode} showalert={showalert} />} />
        <Route path="/about" element={<About title={"Change The Mode"}/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
