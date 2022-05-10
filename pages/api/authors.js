import prisma from '@lib/prismaClient';

export default async function handler(req, res) {
  try {
    const usersList = await prisma.users.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    res.status(200).json(JSON.stringify(usersList));
  } catch (err) {
    res.status(400).json('Error fetching data', err);
  }
}

BigInt.prototype.toJSON = function () {
  return this.toString();
};
