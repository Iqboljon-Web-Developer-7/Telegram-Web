import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseServerAcriontResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

export function toDoubleNum(num: number) {
  return num < 10 ? `0${num}` : num;
}
export function handleMessage() {
  const messages = document.querySelector(".messages");
  if (messages) {
    if (!messages.classList.contains("active")) {
      messages.classList.add("active");
    }
    return "";
  }

  const observer = new MutationObserver(() => {
    const messages = document.querySelector(".messages");
    if (messages) {
      if (!messages.classList.contains("active")) {
        messages.classList.add("active");
      }
      observer.disconnect(); // Stop observing once the element is found
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

export function saveLocalStorage(name: string, data: any): any {
  return localStorage.setItem(name, JSON.stringify(data));
}
export function getLocalStorage(name: string): any {
  try {
    const data = JSON.parse(localStorage.getItem(name)!);
    return data;
  } catch (err) {}
  return null;
}
