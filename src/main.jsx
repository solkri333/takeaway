import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BlogPage from './blog.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


createRoot(document.getElementById('root')).render(
    <Router>
      <Routes>
        <Route path='/' element={<BlogPage />}/>
      </Routes>
    </Router>
)
