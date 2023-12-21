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

export const postData = async ({
  url,
  data,
}: {
  url: string;
  data?: { price: Price };
}) => {
  console.log("posting, ", url, data);

  const res: Response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin", // This is required for the API route to work in the browser
    body: JSON.stringify(data ?? {}),
  });

  if (!res.ok) {
    console.error("Error in postData: ", { url, data, res });

    throw new Error(res.statusText);
  }

  return res.json();
};

export const toDateTime = (secs: number) => {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t;
};
