import prisma from '@lib/prismaClient';

export default async function handler(req, res) {
  try {
    const topicsList = await prisma.health_topics.findMany({
      select: {
        id: true,
        title: true,
        image: true,
        body: true,
        created_at: true,
      },
    });

    res.status(200).json(JSON.stringify(topicsList));
  } catch (err) {
    res.status(400).json('Error fetching topics' + err);
  }
}

BigInt.prototype.toJSON = function () {
  return this.toString();
};
