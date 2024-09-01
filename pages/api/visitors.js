// pages/api/visitors.js
import { connectToDatabase } from '../../lib/mongoose';
import Visitor from '../../models/Visitor';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  if (method === 'GET') {
    try {
      const visitors = await Visitor.find({});
      res.status(200).json(visitors);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching visitors', error });
    }
  } else if (method === 'POST') {
    try {
      const { ipAddress } = req.body;
      const newVisitor = await Visitor.create({ ipAddress });
      res.status(201).json(newVisitor);
    } catch (error) {
      res.status(500).json({ message: 'Error creating visitor', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
