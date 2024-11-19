import React, { Suspense } from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Suspense
        fallback={
          <div className="flex-center gap-3 m-8 p-3 text-[var(--purple-500)] font-semibold bg-[var(--white)] rounded-sm">
            <p className="drop-shadow-md">
              Website is loading. Please wait....
            </p>
            <div className="loader !w-8"></div>
          </div>
        }
      >
        {children}
      </Suspense>
    </main>
  );
};

export default layout;
