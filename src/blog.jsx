import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./style.css";
import { useNavigate } from "react-router-dom";
import f from "./f.txt"



export default function BlogPage() {
const [text, setText] = useState("");


useEffect(() => {
fetch(f)
        .then((response) => response.text())
        .then((data) => setText(data))
        .catch((error) => console.error("Error loading the file:", error));
},[]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 text-white" id="blog-page">
      <header className="flex justify-between items-center p-4 bg-opacity-20 backdrop-blur-lg shadow-lg fixed top-0 w-full" id="header">
        <h1 className="text-xl font-bold" id="site-title">Late Night <div className="read">Read</div></h1>
        <nav>
          <ul className="flex gap-4" id="nav-menu">
            <li><button className="nav-button" onClick={() => setSelectedTag(null)}>Home</button></li>
            <li><button className="nav-button" onClick={() => alert('Launching soon')}>Games</button></li>
          </ul>
        </nav>
      </header>
      
      <div
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <footer style={{ height: "50px" }}></footer>
    </div>
  );
}
