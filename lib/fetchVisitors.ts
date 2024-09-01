// lib/fetchVisitors.ts
import { connectToDatabase } from './mongoose'; // Adjust path if needed
import Visitor from '../models/Visitor'; // Adjust path if needed

// Define the type for visitor data
interface VisitorType {
  _id: string;
  ipAddress: string;
  visitDate: string;
}

export async function fetchVisitors(): Promise<VisitorType[]> {
  const { db } = await connectToDatabase();
  const visitors = await Visitor.find({}).lean();
  return visitors as VisitorType[];
}
