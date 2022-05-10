import prisma from '@lib/prismaClient';
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)
  try {
    const article = await prisma.articles.findMany({
      select: {
        id: true,
        title: true,
        image: true,
        created_at: true,
        updated_by: true,
        slug:true,
        short_description: true,
      },
      where: {
        title: {
          contains: req.body.searchText,
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
