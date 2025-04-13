import { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { enhancedImageAPI } from "../utils/enhanceImageApi";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // default to dark

  // Toggle dark/light mode
  const toggleTheme = () => {
    const root = window.document.documentElement;
    root.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Set initial theme on load
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleImageUpload = async (file) => {
    const localUrl = URL.createObjectURL(file);
    setUploadImage(localUrl);
    setLoading(true);

    try {
      const response = await enhancedImageAPI(file);
      setEnhancedImage(response);
    } catch (error) {
      console.error("Error enhancing image:", error);
      alert("Failed to enhance image. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Theme toggle button */}
      <div className="w-full flex justify-end p-4">
       
      </div>

      <div className="flex flex-col items-center gap-10 p-6">
        <h1 className="text-4xl font-bold"></h1>

        <ImageUpload UploadImageHandler={handleImageUpload} />

        <ImagePreview
          loading={loading}
          uploaded={uploadImage}
          enhanced={enhancedImage?.image}
        />
      </div>
    </div>
  );
};

export default Home;
