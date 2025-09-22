import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import MoodTrackerPage from "./pages/MoodTrackerPage";
import Meditation from "./pages/Meditation";
import Resources from "./pages/Resources";
import About from "./pages/About";

function App() {
  // Set default to true for dark mode
  const [dark, setDark] = useState(true);

  // Persist mode in localStorage & update html class
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDark(savedMode === "true");
    } else {
      // default dark mode if no saved preference
      setDark(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", dark);
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <Router>
      <div className={`min-h-screen p-6 transition-colors duration-300 
                      ${dark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
        <Navbar dark={dark} setDark={setDark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/mood-tracker" element={<MoodTrackerPage />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
