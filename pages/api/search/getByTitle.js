import prisma from '@lib/prismaClient';

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
      },
      where: {
        title: { contains: req.headers.title },
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
