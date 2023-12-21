import { Price } from "@/types";

export const getUrl = () => {
  let url =
    process.env.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in your production environment
    process.env.NEXT_PUBLIC_VERCEL_URL ?? // This is set automatically by Vercel
    "http://localhost:3000"; // This is the URL for your local development environment

  // Ensure that https is used in production
  url = url.includes("http") ? url : `https://${url}`;

  // Ensure that the URL ends with a slash
  url = url.endsWith("/") ? url : `${url}/`;

  return url;
};
