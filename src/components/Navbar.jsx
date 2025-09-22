import { Link } from "react-router-dom";

function Navbar({ dark, setDark }) {
  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white p-2 flex justify-between items-center transition-colors duration-300">
      <h1 className="font-bold text-2xl text-amber-100">QuantaLite</h1>
      <div className="flex items-center space-x-5">
        <Link to="/" className="hover:text-xl duration-200 hover:text-yellow-200">Home</Link>
        <Link to="/mood-tracker" className="hover:text-xl duration-200 hover:text-yellow-200">Mood Tracker</Link>
        <Link to="/journal" className="hover:text-xl duration-200 hover:text-yellow-200">Music</Link>
        <Link to="/meditation" className="hover:text-xl duration-200 hover:text-yellow-200">Meditation</Link>
        <Link to="/about" className="hover:text-xl duration-200 hover:text-yellow-200">About</Link>
        <Link to="/resources" className="hover:text-xl duration-200 hover:text-yellow-200">Contacts</Link>

        {/* Icon-only Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="ml-5 p-2 rounded-full hover:bg-white hover:text-black transition-colors"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;