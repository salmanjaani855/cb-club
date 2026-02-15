import React, { useState, useEffect } from "react";
import Home from "./Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // 2 second ke baad loading hide
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="wrapper">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
    <div className="shadow"></div>
</div>
</div>
    );
  }
return (
  <>
    <Home />

    {/* WhatsApp Floating Button */}
    <a
      href="https://wa.me/923001234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 
      bg-green-500 hover:bg-green-600 
      w-17 h-17 rounded-full 
      flex items-center justify-center 
      shadow-lg hover:scale-110 
      transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-11 h-11"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.82.737 5.474 2.03 7.79L0 32l8.44-2.21A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333c-2.63 0-5.093-.69-7.22-1.89l-.517-.3-5.007 1.31 1.337-4.873-.337-.53A13.27 13.27 0 012.667 16C2.667 8.82 8.82 2.667 16 2.667S29.333 8.82 29.333 16 23.18 29.333 16 29.333zm7.29-9.857c-.4-.2-2.367-1.167-2.733-1.3-.367-.133-.633-.2-.9.2s-1.033 1.3-1.267 1.567c-.233.267-.467.3-.867.1-.4-.2-1.69-.623-3.22-1.987-1.19-1.06-1.993-2.367-2.227-2.767-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.783-.655-.677-.9-.69l-.767-.013c-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.333 0 1.967 1.433 3.867 1.633 4.133.2.267 2.82 4.307 6.833 6.04.955.413 1.7.66 2.28.843.957.304 1.827.261 2.515.158.767-.114 2.367-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z"/>
      </svg>
    </a>
  </>
);

};

export default App;
