import { useDispatch } from 'react-redux';
import { articles, topics } from 'prisma/db/getData';
import { useEffect } from 'react';
import articleActionCreator from 'redux/actions/article';
import topicActionCreator from 'redux/actions/topics';
import dynamic from 'next/dynamic';
import React from 'react';

const ArticleTemplate = dynamic(
  () => import('@components/template/article/index')
);

const Article: React.FC<any> = ({ article, topic }) => {
  const dispatch = useDispatch();

  let articleList = article ? article : [];
  let topicList = topic ? topic : [];

  useEffect(() => {
    articleActionCreator.addArticle(dispatch, articleList);
    topicActionCreator.setTopics(dispatch, topicList);
  });

  return <ArticleTemplate />;
};

export async function getStaticProps() {
  const article = await articles();
  const topic = await topics();

  return {
    props: {
      article,
      topic,
    },
  };
}

export default Article;
