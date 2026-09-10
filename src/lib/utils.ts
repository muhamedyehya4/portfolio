import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * An href points "out of the app" when it is an absolute URL (http/https) or a
 * static file such as a PDF. In-page hashes (#about) and internal routes (/blog)
 * are not external and must keep default in-tab navigation.
 */
export function isExternal(href: string | undefined | null): boolean {
  if (!href) return false;
  return /^https?:\/\//i.test(href) || /\.pdf(\?.*)?$/i.test(href);
}

/**
 * Spread onto an <a>/<Link> so external links open in a new tab safely.
 * Returns nothing for internal links.
 */
export function externalLinkProps(href: string | undefined | null) {
  return isExternal(href)
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}

export function formatDate(date: string | Date) {
  // Use UTC to ensure consistent formatting between server and client
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
