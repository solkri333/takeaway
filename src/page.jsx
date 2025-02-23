import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import myText from "./0.txt";
import myText1 from "./1.txt";
import myText2 from "./2.txt";
import myText3 from "./3.txt";
import myText4 from "./4.txt";
import myText5 from "./5.txt";
import myText6 from "./6.txt";
import myText7 from "./7.txt";
import myText8 from "./8.txt";
import myText9 from "./9.txt";
import myText10 from "./10.txt";
import myText11 from "./11.txt";
import myText12 from "./12.txt";
import myText13 from "./13.txt";
import myText14 from "./14.txt";
import './style.css'

function Page() {
  const navigate =useNavigate()
  const gotoHome = () => {
    navigate(`/`); // 123 is the parameter
  };
  const { id } = useParams();
  const [text, setText] = useState("");
  useEffect(() => {
    if (id === "1") {
      fetch(myText)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } else if (id === "2") {
      fetch(myText1)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } else if (id === "3") {
      fetch(myText2)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } else if (id === "4") {
      fetch(myText3)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } 
    else if (id === "5") {
      fetch(myText4)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } 
    else if (id === "6") {
      fetch(myText5)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } 
    else if (id === "7") {
      fetch(myText6)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } 
    else if (id === "8") {
      fetch(myText7)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } 
    else if (id === "9") {
      fetch(myText8)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } 
    else if (id === "10") {
      fetch(myText9)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } 
    else if (id === "11") {
      fetch(myText10)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } 
    else if (id === "12") {
      fetch(myText11)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } 
    else if (id === "13") {
      fetch(myText12)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } 
    else if (id === "14") {
      fetch(myText13)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } 
    else if (id === "15") {
      fetch(myText14)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
    } 
    else {
      setText("No content available for this ID.");
    }
  }, [id]); // Re-run when `id` changes
  return (
      <div>
      <header className="flex justify-between items-center p-4 bg-opacity-20 backdrop-blur-lg shadow-lg fixed top-0 w-full" id="header">
        <h1 className="text-xl font-bold" id="site-title">Late Night Read</h1>
        <nav>
          <ul className="flex gap-4" id="nav-menu">
            <li><button className="nav-button" onClick={() => gotoHome()}>Home</button></li>
            <li><button className="nav-button" onClick={() => alert('Launching soon')}>Games</button></li>
            <li><button className="nav-button">Videos</button></li>
          </ul>
        </nav>
      </header>
      <div className="title"></div>
      <div
        dangerouslySetInnerHTML={{ __html: text }}
      />
      </div>
    );
  }
  
  export default Page;
  
