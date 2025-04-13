import { useEffect, useState } from "react";
import Home from "./components/Home";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default: dark mode

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4 bg-gray-100 dark:bg-black transition-colors">
      {/* Toggle Button */}
      <div className="w-full flex justify-end px-4 mb-4">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="px-4 py-2 rounded-lg bg-blue-600 dark:bg-yellow-400 text-white dark:text-black shadow-md transition-all"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-2">
          AI Image Enhancer
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-300">
          Upload your Image and let AI enhance!
        </p>
      </div>

      {/* Main Component */}
      <Home />

      {/* Footer */}
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-4 opacity-70">
        Powered By @PrathikPai
      </div>


      {/*  About Section */}
      <div className="mt-2 max-w-3xl text-center bg-white text-white dark:bg-gray-900 shadow-lg rounded-2xl p-4">
                <h2 className="text-2xl font-mono mb-4">About – AI Image Enhancer</h2>
                <p className="mb-2">
                <p className="mt-4 text-sm font-mono opacity-80">Built with ❤️ by Prathik Pai using React, Tailwind CSS, and Picwish APIs.</p>
               </p>
                </div>
    </div>
  );
};

export default App;
