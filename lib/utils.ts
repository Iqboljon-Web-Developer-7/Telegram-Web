import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function parseServerAcriontResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

export function saveLocalStorage(name: string, data: any): void {
  if (typeof window !== "undefined")
    return localStorage.setItem(name, JSON.stringify(data));
}
export function getLocalStorage(name: string): any {
  if (typeof window !== "undefined") {
    try {
      const data = JSON.parse(localStorage.getItem(name)!);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
