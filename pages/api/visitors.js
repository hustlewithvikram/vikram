// pages/api/visitors.js
import { connectToDatabase } from "../../lib/mongoose";
import Visitor from "../../models/Visitor";


export default async function handler(req, res) {
  const { method } = req;
  const { db } = await connectToDatabase();

  if (method === "GET") {
    try {
      // Get the visitor's IP address
      const ipAddress =
        req.headers["x-forwarded-for"] || req.connection.remoteAddress;

      // Check if the visitor already exists in the database
      let visitor = await Visitor.findOne({ ipAddress });

      const visitorCount = await Visitor.countDocuments();
      res.status(400).json({totalCount : visitorCount});

      if (!visitor) {
        visitor = await Visitor.create({ ipAddress });
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
