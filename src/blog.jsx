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
          <>
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

      <div style={{ opacity: 0 }}
        dangerouslySetInnerHTML={{ __html: text }}
      />

      <footer style={{ height: "50px" }}></footer>
    </div>
                  <div className="Links">
            <a className="unique-class" href="https://txxx.tube/videos/20660585/250213-i4/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videovoyeurhit.com/videos/360947/two-european-female-slaves-and-publi-with-steve-holmes-antonio-ross-and-lyen-parker/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videomanysex.com/video/3147939/poke-her/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videoxshemale.com/videos/1149329/full-bodied-booty-tranzvr/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://senzuri.tube/videos/10283067/01d1322-a-mature-wife-is-vaginal-cum-shot-while-a-young-man-straddles-a-cock-that-can-not-suppress-excitement_07354/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videopornl.com/videos/3564183/love-crystale-max-cortes-in-education-for-this-too-nasty-bitch-mmm100/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videohotmovs.com/videos/12843561/we-cant-get-enough-of-aurora-jolies-big-asses2/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videovjav.com/videos/870909/japanese-261ara-553-limited-scene/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videotubepornclassic.com/videos/1204357/all-the-pussy-you-want-to-make-you-enjoy-5-spoken/?promo=47026" target="_blank">Click</a>
                  </div>
          </>
  );
}
