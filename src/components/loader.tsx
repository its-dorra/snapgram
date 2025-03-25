import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 border-4 border-gray-800 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
