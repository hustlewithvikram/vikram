// pages/api/visitors.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Visitor from "@/models/Visitor";
import { fetchVisitors } from "@/lib/fetchVisitors"; // Ensure this function is defined correctly

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Get visitor's IP address
    const ip = Array.isArray(req.headers["x-forwarded-for"])
      ? req.headers["x-forwarded-for"][0]
      : req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    if (!ip) {
      return res.status(400).json({ message: "Unable to determine IP address" });
    }

    // Fetch current visitors
    const visitors = await fetchVisitors();

    // Check if IP is already in the database
    const ipExists = visitors.some((visitor: { ipAddress: string }) => visitor.ipAddress === ip);

    // If IP doesn't exist, add it
    if (!ipExists) {
      await Visitor.create({ ipAddress: ip });
    }

    // Send the visitors as a response
    res.status(200).json(visitors);
  } catch (error) {
    console.error("Error in handler:", error);
    res.status(500).json({ error, message: "Error fetching or adding visitors" });
  }
}
