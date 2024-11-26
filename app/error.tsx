"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex-center flex-col bg-slate-950 text-slate-200 p-8">
        <h2 className="text-2xl">Something went wrong!</h2>
        <button
          className="mt-4 border border-slate-700 px-5 py-2 rounded-3xl hover:opacity-85 active:opacity-75 duration-200"
          onClick={() => reset()}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
