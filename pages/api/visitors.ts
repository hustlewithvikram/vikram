// pages/api/visitors.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchVisitors } from '@/lib/fetchVisitors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const visitors = await fetchVisitors();
    res.status(200).json(visitors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching visitors' });
  }
}
