import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function articles() {
  try {
    const article = await prisma.articles.findMany({
      take: 100,
      select: {
        id: true,
        title: true,
        image: true,
        created_at: true,
        updated_by: true,
        short_description: true,
        description: true,
        health_topics: true,
        writer_id: true,
      },
    });

    return JSON.parse(JSON.stringify(article));
  } catch (err) {
    return err;
  }
}
export async function authors() {
  try {
    const usersList = await prisma.users.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return JSON.parse(JSON.stringify(usersList));
  } catch (err) {
    return err;
  }
}

export async function topics() {
  try {
    const topicsList = await prisma.health_topics.findMany({
      select: {
        id: true,
        title: true,
        image: true,
        body: true,
        created_at: true,
        created_by: true,
        status: true,
      },
    });

    return JSON.parse(JSON.stringify(topicsList));
  } catch (err) {
    return err;
  }
}

export async function users() {
  try {
    const usersList = await prisma.users.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return JSON.parse(JSON.stringify(usersList));
  } catch (err) {
    return err;
  }
}

export async function banners() {
  try {
    const bannersList = await prisma.banners.findMany({
      select: {
        id: true,
        article_id: true,
        description: true,
        image: true,
      },
    });

    return JSON.parse(JSON.stringify(bannersList));
  } catch (err) {
    return err;
  }
}

// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};
