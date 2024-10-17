// pages/api/visitors.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Get visitor's IP address
    const ip = Array.isArray(req.headers["x-forwarded-for"])
      ? req.headers["x-forwarded-for"][0]
      : req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    // Send the visitors as a response
    res.status(200).json({ipAddress : ip});
  } catch (error) {
    console.error("Error in whoami handler:", error);
    res.status(500).json({ error, message: "Error fetching or adding visitors" });
  }
}
