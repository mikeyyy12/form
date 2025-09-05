import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// cn("base", condition && "bg-red-500", "extra")
// → "base bg-red-500 extra"
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
