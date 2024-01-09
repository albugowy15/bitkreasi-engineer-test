import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAPIUrl(): string {
  const apiUrl = process.env.API_URL ?? "http://localhost:3000";
  return apiUrl;
}
