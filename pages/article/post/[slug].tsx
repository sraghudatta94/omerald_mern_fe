import { useDispatch } from 'react-redux';
import { articles, topics, users } from 'prisma/db/getData';
import { useEffect } from 'react';
import React from 'react';
import dynamic from 'next/dynamic';
import topicActionCreator from 'redux/actions/topics';
import articleActionCreator from 'redux/actions/article';
import userActionCreator from 'redux/actions/users';

const SinglePostTemplate = dynamic(
  () => import('@components/template/article/singlePost.tsx')
);

const Article: React.FC<any> = ({ article, topic, user }) => {
  const dispatch = useDispatch();

  let articleList = article ? article : [];
  let topicList = topic ? topic : [];
  let userList = user ? user : [];

  useEffect(() => {
    articleActionCreator.addArticle(dispatch, articleList);
    topicActionCreator.setTopics(dispatch, topicList);
    userActionCreator.setUsers(dispatch, userList);
  });

  return <SinglePostTemplate />;
};

export default Article;

export async function getStaticProps() {
  const article = await articles();
  const topic = await topics();
  const user = await users();
  return {
    props: {
      article,
      topic,
      user,
    },
  };
}

export async function getStaticPaths() {
  let article = await articles();
  article = article.filter(art => art.id != '88');
  const paths = article.map(post => ({
    params: { slug: post.slug },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
}
