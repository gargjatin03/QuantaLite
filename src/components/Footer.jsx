import { FaLinkedin, FaGithub, FaLaptopCode } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-600 dark:bg-gray-800 text-white py-5 mt-70 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Copyright */}
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Made with ❤️ by Jatin Garg. All rights reserved.
        </p>

        {/* Right: Links */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-6">

          <a href="https://www.linkedin.com/in/jatin-garg-165372179/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-yellow-300 hover:scale-110 transition">
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>

          <a href="/Resources" className="flex hover:text-yellow-300 hover:scale-110 transition">Contact</a>

        </div>
      </div>

      {/* Optional bottom note */}
      
    </footer>
  );
}

export default Footer;