// pages/api/visitors.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/mongoose";

let collectionName = "visitors";

async function fetchVisitors() {
  try {
    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    return await collection.find({}).toArray();
  } catch (error) {
    console.log(error);
  }
}

async function addVisitor(ip: string) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection(collectionName);
    await collection.insertOne({ ip, timestamp: new Date() });
  } catch (error) {
    console.log(error);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Get visitor's IP address
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    // Fetch current visitors
    const visitors = await fetchVisitors();

    // Check if IP is already in the database
    const ipExists = visitors.some((visitor: { ip: string | string[] | undefined; }) => visitor.ip === ip);

    // If IP doesn't exist, add it
    if (!ipExists) {
      await addVisitor(ip as string);
    }

    // Send the visitors as a response
    res.status(200).json(visitors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching or adding visitors" });
  }
}
