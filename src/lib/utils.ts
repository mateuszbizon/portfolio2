import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateCurrentAge() {
    const currentYear = new Date().getFullYear()
    const yearOfBirth = 2000

    return currentYear - yearOfBirth
}