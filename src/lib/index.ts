import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...className : ClassValue[]) => {
    return twMerge(clsx(className)) 
}

export const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Client-side
    return '';
  }

  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
};
