import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const article = await prisma.articles.findMany({
      select: {
        id: true,
        title: true,
        image: true,
        created_at: true,
        updated_by: true,
        short_description: true,
        health_topics: true,
      },
      where: {
        id: {
          equals: parseInt(req.headers.id),
        },
      },
    });

    res.status(200).json(JSON.stringify(article));
  } catch (err) {
    res.status(400).json('Error fetching data', err);
  }
}

BigInt.prototype.toJSON = function () {
  return this.toString();
};