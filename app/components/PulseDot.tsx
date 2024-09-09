import React from "react";

const PulseDot: React.FC = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default PulseDot;
