import React, { useState } from "react";

const About = (props) => {
  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [textcolor, settextcolor] = useState("change black mode");

  function chagecolor() {
    if (mystyle.color === "black") {
      setmystyle({
        color: "white",
        backgroundColor: "black",
      });
      settextcolor("change to white mode");
    } else {
      setmystyle({
        color: "black",
        backgroundColor: "white",
      });
      settextcolor("change to black mode");
    }
  }

  let color = "light";
  function modechange() {
    let mie = document.getElementById("mie");

    if (color === "light") {
      color = "black";
      // console.log(color);
      mie.style.backgroundColor = "black";
      mie.style.color = "white";
    } else {
      color = "light";
      // console.log(color);
      mie.style.backgroundColor = "white";
      mie.style.color = "black";
    }
    // console.log("mode= ",color)
  }

  return (
    <div>
      <div className="container mt-2" id="mie">
        hellow world
      </div>
      <div className="container mt-2" style={mystyle}>
        <h1>{props.title}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem veniam
          cum non enim et vitae sint impedit possimus, provident ex. Repellat
          sapiente eveniet numquam. Rerum provident perspiciatis explicabo
          beatae nobis culpa optio!
        </p>
       <button className={`btn btn-outline-warning m-3 text-${mystyle.color === "black"?"dark":"light"}`} onClick={chagecolor}> {textcolor}</button>
      </div>
      <div className="container my-5">
        <button className="btn btn-success" onClick={modechange}>
          mode
        </button>
      </div>
    </div>
  );
};

export default About;
