import { connectToDatabase } from './mongoose';
import Visitor from '../models/Visitor';

interface VisitorType {
  _id: string;
  ipAddress: string;
  visitDate: string;
}

export async function fetchVisitors(): Promise<VisitorType[]> {
  try {
    const { db } = await connectToDatabase();
  } catch(error) {
    return new Visitor;
  }

  const visitors = await Visitor.find({}).lean();
  return visitors as VisitorType[];
}
