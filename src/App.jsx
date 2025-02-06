import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './index.css'
const Navbar = () => (
  <nav className="p-4 bg-gray-900 text-white flex justify-between shadow-lg">
    <div className="nb">

    <h1 className="text-2xl font-bold text-red-500 title">Discordse</h1>
    <div className="space-x-4 nav">
      <Link to="/" className="hover:text-gray-300 transition-all bar">Home</Link>
      <Link to="/payment" className="hover:text-gray-300 transition-all bar">Payment</Link>
      <Link to="/ai-content" className="hover:text-gray-300 transition-all bar" onClick={() => alert('Launching Soon!')}>AI Content</Link>
    </div>
    </div>
  </nav>
);

const Home = () => {
  const [unlockedTiers, setUnlockedTiers] = useState([1]);
  const videos = [
    "video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4", "video6.mp4"
  ];

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center text-red-500 tiers">Tiers</h2>
      <div className="flex justify-center space-x-4 my-6 tier">
        {[1, 2, 3, 4, 5].map((tier) => (
          <button
            key={tier}
            className={`px-6 py-2 text-white font-semibold rounded-lg shadow-md transition-all ${unlockedTiers.includes(tier) ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-700 cursor-not-allowed'}`}
            disabled={!unlockedTiers.includes(tier)}
          >
            Tier {tier}
          </button>
        ))}
      </div>
      <h2 className="text-2xl font-semibold text-center tiers">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {videos.map((video, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all vid">
            <video className="w-full rounded-lg vid" controls>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

const Payment = () => (
  <div className="p-6 bg-gray-900 text-white min-h-screen flex flex-col items-center">
    <h2 className="text-3xl font-bold text-red-500">Payment Page</h2>
    <p className="mt-2 text-lg">Address: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</p>
    <p className="mt-2 text-lg">Paste your BTC Payment ID for approval:</p>
    <input type="text" className="border border-gray-700 p-3 w-2/3 my-4 rounded-lg bg-gray-800 text-white" placeholder="BTC TXID" />
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition-all">Submit for Approval</button>
  </div>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  </Router>
);

export default App;
