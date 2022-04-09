import { searchByParams } from '@public/static/api';
import { TopicType } from '@public/static/types/topics';
import readingTime from 'reading-time';

export const checkReadTime = description => {
  return readingTime(description).text;
};

export const formatDate = (date: Date) => {
  let d = new Date(date);
  let formattedDate = d.toDateString();

  return formattedDate;
};

export const getAuthorName = (writerId, users): string => {
  let author: string = 'Omerald';

  users.forEach(user => {
    if (user.id === writerId) {
      author = user.name;
    }
  });

  return author;
};

export const getArticleTopics = (
  topicId: string,
  topicsList: TopicType[]
): string => {
  let topicsArticle: string = '';
  if (!topicId.includes(',')) {
    topicsList.forEach(topic => {
      if (topicId === topic.id.toString()) {
        topicsArticle = topic.title;
      }
    });
  } else {
    let id = topicId.split(',')[0];
    topicsList.forEach(topic => {
      if (id === topic.id.toString()) {
        topicsArticle = topic.title;
      }
    });
  }

  return topicsArticle;
};

export const getAllArticleTopics = (
  topicId: string,
  topicsList: TopicType[]
): string[] => {
  let topicsArticle: string[] = [];
  topicId.split(',').map(x => {
    topicsList.forEach(topic => {
      if (topic.id.toString() === x) {
        topicsArticle.push(topic.title);
      }
    });
  });

  return topicsArticle;
};

export const searchByParam = async value => {
  if (!['', ' ', '  ', '   ', '     '].includes(value)) {
    const resp = await fetch(searchByParams, {
      headers: {
        Content_Type: 'application.json',
        title: value,
      },
    });
    return resp.json();
  }
};
