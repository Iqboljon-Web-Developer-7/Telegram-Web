import React from "react";

const Loading = () => {
  return (
    <div className="">
      {new Array(14).fill(14).map((_, idx) => (
        <div key={idx} className="flex items-center py-3 px-4 space-x-4">
          {/* <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div> */}
          <div className="flex-1 space-y-2">
            {/* <div className="h-4 w-1/4 bg-gray-300 rounded animate-pulse"></div> */}
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
