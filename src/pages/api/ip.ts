import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  ip: string | string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const ip =
    req.headers['x-forwarded-for'] ||
    (req.socket && req.socket.remoteAddress) ||
    '';

  res.status(200).json({ ip });
}
