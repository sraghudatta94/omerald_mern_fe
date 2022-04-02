import articleActionCreator from 'redux/actions/article';
import authorActionCreator from 'redux/actions/author';
import topicActionCreator from 'redux/actions/topics';
import React from 'react';
import {
  ArticleType,
  AuthorType,
  TopicType,
  UserType,
} from '@public/static/types/topics';
import { articles, authors, topics, users } from 'prisma/db/getData';
import { HomeTemplate } from '@components/template/home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { TopicsListType } from '@public/types';
import userActionCreator from 'redux/actions/users';

const Home: React.FC<any> = ({ article, author, topic, user }) => {
  const dispatch = useDispatch();

  let articleList: ArticleType[] = article ? article : [];
  let authorList: AuthorType[] = author ? author : [];
  let topicsList: TopicsListType[] = topic ? topic : [];
  let usersList: UserType[] = user ? user : [];

  useEffect(() => {
    articleActionCreator.addArticle(dispatch, articleList);
    authorActionCreator.setAuthor(dispatch, authorList);
    topicActionCreator.setTopics(dispatch, topicsList);
    userActionCreator.setUsers(dispatch, usersList);
  });

  return <HomeTemplate />;
};

export default Home;

export async function getStaticProps() {
  const article: AuthorType[] = await articles();
  const author: AuthorType[] = await authors();
  const topic: TopicType[] = await topics();
  let user: UserType[] = await users();
  user = user.filter(u => u.name !== null);
  return {
    props: {
      article,
      author,
      topic,
      user,
    },
  };
}
