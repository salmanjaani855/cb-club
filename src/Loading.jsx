// Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      {/* Simple spinner */}
      <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
