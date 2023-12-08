import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
 

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const users = await prisma.users.findMany()
  response.status(200).json({
    body: users,
    query: request.query,
    cookies: request.cookies,
  });
}