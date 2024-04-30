import React, { useState, useRef  } from "react";

const Home = (props) => {
  const [uperCase, setuperCase] = useState("");
  // const textareaRef = useRef(null);

  function uTextchange(e) {
    setuperCase(e.target.value)
  }

  // uper text
  function uperText() {
    let newText=uperCase.toUpperCase();
    setuperCase(newText);
  }

  // lower text
  function lowerText() {
    let newText=uperCase.toLowerCase();
    setuperCase(newText);
  }

  // clear text
  function clearText() {
    let newText="";
    setuperCase(newText);
  }

  // copy text
  function copyText() {
    // method : 1
    // let text=document.getElementById("textarea");
    // text.select();
    // text.setSelectionRange(0,9999);
    // navigator.clipboard.writeText(text.value);
    // method : 2
    navigator.clipboard.writeText(uperCase);
    // upercase mthod 2
    document.getSelection().removeAllRanges();
    props. showalert("your text has been copied...","info");
  }

  // handleExtraSpaces
  function handleExtraSpaces() {
    let newText=uperCase.split(/[ ]+/);
    setuperCase(newText.join(" "));
  }
//  function copyText() {
//    if (textareaRef.current) {
//       // Select the textarea element
//       textareaRef.current.select();

//       // Copy the selected text
//       document.execCommand("copy");
//     }
  
//  }
//   function name() {
//     let para=document.querySelector("textarea");
//     para.value=para.value.toLowerCase();
//   }
  return (
    <div className={`text-${props.mode==="light"?"dark":"light"}`} >
    <div>
      <div className="row ml-5 mt-2">
        <h1>{props.heding}</h1>
      </div>
      <div className="row">
        <textarea
          className={`col-7 mt-2 mr-5 ml-5 text-${props.mode==="light" ? "dark":"light"}`} 
          name=""
          id="textarea"
          cols="100"
          rows="10"
          onChange={uTextchange}
          value={uperCase}
         style={{backgroundColor: props.mode==="light" ? "white":"#343a40"}}
          // ref={textareaRef} 
        ></textarea>
      </div>
      <div className="row">
        <button disabled={uperCase.length===0} className="btn btn-info h-100 col-1 m-5" onClick={uperText}>
          convert to upercase
        </button>
        <button disabled={uperCase.length===0} className="btn btn-outline-info h-100 col-1 m-5" onClick={lowerText}>
          convert to lowercase
        </button>
        <button disabled={uperCase.length===0} className="btn btn-info h-100 col-1 m-5" onClick={clearText}>
          All-clear
        </button>
        <button disabled={uperCase.length===0} className="btn btn-outline-info h-100 col-1 m-5" id="copyed" onClick={copyText}>
          copyText
        </button>
        <button disabled={uperCase.length===0} className="btn btn-info h-100 col-2 m-5" onClick={handleExtraSpaces}>
        handleExtraSpaces
        </button>
        {/* <button className="btn btn-info h-100 col-3 m-5" onClick={name}>
          convert to lowercase
        </button> */}
      </div>
    </div>
    <div className="container">
      <h1>Your Text Summary</h1>
      {/* <p>{uperCase.split(" ").length-1} word and {uperCase.length} characters</p> */}
      <p>{uperCase.split(/\s+/).filter((element)=>{return element.length !==0 }).length} word and {uperCase.length} characters</p>
      <p>{.008*uperCase.split(" ").filter((element)=>{
        return element.length !== 0
      }).length} minutes to read</p>
    </div>
    <div className="container">
      <h3>Preview</h3>
      <p>{uperCase.length>0?uperCase:"Enter something in the text-box about to preview it here..."}</p>
    </div>
    </div>
  );
};

export default Home;
