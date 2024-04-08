// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import clubs from '../../data/clubs.json';

interface Data {
  message: string;
  data?: {
    id: string;
    name: string;
    description: string;
    image: string;
    tags: string[];
    approved: string;
    profileImage: string | null;
    soc: boolean;
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (!('id' in req.query && typeof req.query.id === 'string')) {
    res.status(400).json({ message: 'Incorrect query present' });
  }
  const foundClub = clubs.find((club) => club.id === req.query.id);
  if (typeof foundClub === 'undefined') {
    res.status(400).json({ message: 'Club not found' });
  }
  res.status(200).json({
    message: 'success',
    data: foundClub,
  });
}
