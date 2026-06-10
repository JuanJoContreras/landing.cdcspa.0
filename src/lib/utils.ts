import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "56947533300";
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Hola%2C%20me%20interesa%20cotizar%20ventanas%20PVC`;
export const EMAIL = "ventas@cdcspa.cl";
export const HOURS = "Lunes a Viernes: 09:00 - 18:00 hrs";
