import { useState, useEffect, useRef } from "react";

export function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profile = localStorage.getItem("username");

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    window.location.reload();
  };

  // Effect untuk menangani klik di luar dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="p-5 flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
      <div className="text-white font-bold text-lg">
        Anime<span className="text-red-500 font-extrabold">Quiz</span>
      </div>
      <div className="relative" ref={dropdownRef}>
        <button
          className="text-white focus:outline-none bg-blue-600 p-2 rounded-lg border-white border"
          onClick={toggleDropdown}
        >
          {profile}
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
