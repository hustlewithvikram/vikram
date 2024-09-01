// pages/api/visitors.js
import { connectToDatabase } from "../../lib/mongoose";
import Visitor from "../../models/Visitor";

export default async function handler(req, res) {
  const { method } = req;

  try {
    const { db } = await connectToDatabase();
    res
      .status(200)
      .json({ message: "Connected to database", db: db.databaseName });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to connect to database", error: error.message });
  }

  if (method === "GET") {
    try {
      // Get the visitor's IP address
      const ipAddress =
        req.headers["x-forwarded-for"] || req.connection.remoteAddress;

      // Check if the visitor already exists in the database
      let visitor = await Visitor.findOne({ ipAddress });

      if (visitor) {
        // If visitor exists, respond with a message
        res.status(200).json({ message: "Visitor already logged", visitor });
      } else {
        // If visitor does not exist, create a new record
        visitor = await Visitor.create({ ipAddress });
        res.status(201).json({ message: "New visitor logged", visitor });
      }
    } catch (error) {
      // Handle any errors
      res.status(500).json({ message: "Error logging visitor", error });
    }
  } else {
    // Method not allowed
    res.status(405).json({ message: "Method not allowed" });
  }
}
