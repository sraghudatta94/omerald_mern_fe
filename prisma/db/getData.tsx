import prisma from '@lib/prismaClient';

export async function articles() {
  try {
    const articleList = await prisma.articles.findMany({
      // take: 100,
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
      where: {
        title: {},
      },
    });

    return JSON.parse(
      JSON.stringify(
        articleList.filter(article => {
          article.title.includes('Is Mental Health still considered ?');
        })
      )
    );
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

export async function policy() {
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

    return JSON.parse(JSON.stringify(policy));
  } catch (err) {
    return err;
  }
}

// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};
