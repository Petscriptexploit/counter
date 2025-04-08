import { NextApiRequest, NextApiResponse } from 'next';

const counter = 0;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // Return the current counter value
    return res.json({ counter });
  } else if (req.method === 'POST') {
    // Increment the counter value
    counter++;
    return res.json({ counter });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
