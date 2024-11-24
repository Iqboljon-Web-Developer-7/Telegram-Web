import React from "react";

const Loading = () => {
  return (
    <div className="space-y-4 p-4">
      <div className="h-12 w-12 rounded-full bg-gray-300 animate-pulse"></div>
      <div className="space-y-2">
        <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
