import React from "react";

const Loading = () => {
  return (
    <div className="p-2 max-h-screen overflow-y-auto">
      {new Array(14).fill(14).map((_, idx) => (
        <div key={idx} className="flex items-center py-3 px-4 space-x-4">
          <div className="flex-1 space-y-2">
            <div className="space-y-2">
              <div className="h-3 w-3/4 bg-[var(--grey-800)] rounded animate-pulse"></div>
              <div className="h-3 w-1/2  bg-[var(--grey-800)] rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
