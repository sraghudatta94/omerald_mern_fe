import prisma from '@lib/prismaClient';

export default async function handler(req, res) {
  try {
    const policy = await prisma.settings.findMany({
      take: 40,
      select: {
        id: true,
        s_name: true,
        s_key: true,
        s_value: true,
      },
    });

    res.status(200).json(JSON.stringify(policy));
  } catch (err) {
    res.status(400).json('Error fetching data', err);
  }
}

BigInt.prototype.toJSON = function () {
  return this.toString();
};
