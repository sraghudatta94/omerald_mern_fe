import { articles, authors, banners, topics, users } from 'prisma/db/getData';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { TopicsListType } from '@public/types';
import {
  ArticleType,
  AuthorType,
  BannerType,
  TopicType,
  UserType,
} from '@public/static/types/topics';
import bannerActionCreator from 'redux/actions/banners';
import articleActionCreator from 'redux/actions/article';
import authorActionCreator from 'redux/actions/author';
import topicActionCreator from 'redux/actions/topics';
import userActionCreator from 'redux/actions/users';
import dynamic from 'next/dynamic';
import React from 'react';

const HomeTemplate = dynamic(() => import('@components/template/home/index'));

const Home: React.FC<any> = ({ article, author, topic, user, banner }) => {
  const dispatch = useDispatch();

  let articleList: ArticleType[] = article ? article : [];
  let authorList: AuthorType[] = author ? author : [];
  let topicsList: TopicsListType[] = topic ? topic : [];
  let usersList: UserType[] = user ? user : [];
  let bannersList: UserType[] = banner ? banner : [];

  useEffect(() => {
    articleActionCreator.addArticle(dispatch, articleList);
    authorActionCreator.setAuthor(dispatch, authorList);
    topicActionCreator.setTopics(dispatch, topicsList);
    userActionCreator.setUsers(dispatch, usersList);
    bannerActionCreator.setbanners(dispatch, bannersList);
  });

  return <HomeTemplate />;
};

export default Home;

export async function getStaticProps() {
  const article: AuthorType[] = await articles();
  const author: AuthorType[] = await authors();
  const topic: TopicType[] = await topics();
  const user: UserType[] = await users();

  return {
    props: {
      article,
      author,
      topic,
      user,
    },
  };
}
