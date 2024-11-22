import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseServerAcriontResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

export function handleMessage() {
  // Check immediately if the element already exists
  const messages = document.querySelector(".messages");
  if (messages) {
    console.log("adding1");
    messages.classList.add("active");
    return; // No need to observe if it's already present
  }

  // Create and set up the MutationObserver
  const observer = new MutationObserver(() => {
    const messages = document.querySelector(".messages");
    if (messages) {
      console.log("adding 2");
      messages.classList.add("active");
      // observer.disconnect(); // Stop observing once the element is found
    }
  });

  observer.observe(document.body, {
    childList: true, // Monitor direct children
    subtree: true, // Include all descendants
  });
}

export function saveLocalStorage(name: string, data: any): any {
  if (typeof window !== "undefined") {
    return localStorage.setItem(name, JSON.stringify(data));
  }
  return null;
}
export function getLocalStorage(name: string): any {
  if (typeof window !== "undefined") {
    try {
      const data = JSON.parse(localStorage.getItem(name)!);
      return data;
    } catch (err) {}
  }
  return null;
}
