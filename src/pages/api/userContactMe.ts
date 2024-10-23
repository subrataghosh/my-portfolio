import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { email, name, subject, message } = req.body;
        const user = await prisma.userContactMe.create({
          data: {
            email,
            name,
            subject,
            message
          },
        });
        res.status(201).json(user);
      } catch (error) {
        res.status(500).json({ error: 'Error sending user message :' + error });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
